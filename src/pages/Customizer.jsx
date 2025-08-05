import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSnapshot } from "valtio";

import state from "../store";
import { EditorTabs, FilterTabs, DecalTypes } from "../config/constants";
import Tab from "../components/Tab";
import FilePicker from "../components/FilePicker";
import AIPicker from "../components/AIPicker";
import ColorPicker from "../components/ColorPicker";
import CustomButton from "../components/CustomButton";
import { reader } from "../config/helpers";
import { fadeAnimation, slideAnimation } from "../config/motion";
import CanvasComponent from "../components/CanvasComponent"; // ajuste o nome se necessário

const Customizer = () => {
  const snap = useSnapshot(state);

  const [file, setFile] = useState("");
  const [prompt, setPrompt] = useState("");
  const [generatingImg, setGeneratingImg] = useState(false);

  const [activeEditorTab, setActiveEditorTab] = useState("");
  const [activeFilterTab, setActiveFilterTab] = useState({
    logoShirt: true,
    stylishShirt: false,
  });

  // show tab content depending on the activeTab
  const generateTabContent = () => {
    switch (activeEditorTab) {
      case "colorpicker":
        return <ColorPicker />;
      case "filepicker":
        return <FilePicker file={file} setFile={setFile} readFile={readFile} />;
      case "aipicker":
        return (
          <AIPicker
            prompt={prompt}
            setPrompt={setPrompt}
            generatingImg={generatingImg}
            handleSubmit={handleSubmit}
          />
        );
      default:
        return null;
    }
  };

  const handleSubmit = async (type) => {
    if (!prompt) return alert("Please enter a prompt");

    try {
      setGeneratingImg(true);

      const response = await fetch("http://localhost:8080/api/v1/dalle", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt,
        }),
      });

      const data = await response.json();

      handleDecals(type, `data:image/png;base64,${data.photo}`);
    } catch (error) {
      alert(error);
    } finally {
      setGeneratingImg(false);
      setActiveEditorTab("");
    }
  };

  const handleDecals = (type, result) => {
    const decalType = DecalTypes[type];

    state[decalType.stateProperty] = result;

    if (!activeFilterTab[decalType.filterTab]) {
      handleActiveFilterTab(decalType.filterTab);
    }
  };

  const handleActiveFilterTab = (tabName) => {
    switch (tabName) {
      case "logoShirt":
        state.isLogoTexture = !activeFilterTab[tabName];
        break;
      case "stylishShirt":
        state.isFullTexture = !activeFilterTab[tabName];
        break;
      default:
        state.isLogoTexture = true;
        state.isFullTexture = false;
        break;
    }

    setActiveFilterTab((prevState) => {
      return {
        ...prevState,
        [tabName]: !prevState[tabName],
      };
    });
  };

  const readFile = (type) => {
    reader(file).then((result) => {
      handleDecals(type, result);
      setActiveEditorTab("");
    });
  };

  return (
    <AnimatePresence>
      {!snap.intro && (
        <motion.div
          key="custom"
          className="absolute top-0 left-0 z-10 w-full min-h-screen flex flex-col items-center justify-start px-2 py-2 max-md:static max-md:px-1 max-md:py-1"
          {...slideAnimation("left")}
        >
          {/* Camiseta 3D sempre visível e centralizada */}
          <div className="canvas-container w-full flex justify-center items-center mb-4">
            <CanvasComponent />
          </div>

          {/* EditorTabs e campos de personalização sempre visíveis em mobile */}
          <div className="editortabs-container tabs max-md:w-full max-md:flex-row max-md:gap-2">
            {EditorTabs.map((tab) => (
              <Tab
                key={tab.name}
                tab={tab}
                handleClick={() => setActiveEditorTab(tab.name)}
              />
            ))}
            {generateTabContent()}
          </div>

          {/* Botão Voltar sempre visível e acessível */}
          <motion.div
            className="absolute z-10 top-5 right-5 max-md:static max-md:top-auto max-md:right-auto max-md:w-full max-md:flex max-md:justify-center"
            {...fadeAnimation}
          >
            <CustomButton
              type="filled"
              title="Voltar"
              handleClick={() => (state.intro = true)}
              customStyles="w-fit px-4 py-2.5 font-bold text-sm max-md:w-full"
            />
          </motion.div>

          {/* FilterTabs sempre visíveis em mobile */}
          <motion.div
            className="filtertabs-container max-md:static max-md:w-full max-md:flex-wrap max-md:gap-2"
            {...slideAnimation("up")}
          >
            {FilterTabs.map((tab) => (
              <Tab
                key={tab.name}
                tab={tab}
                isFilterTab
                isActiveTab={activeFilterTab[tab.name]}
                handleClick={() => handleActiveFilterTab(tab.name)}
              />
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Customizer;
