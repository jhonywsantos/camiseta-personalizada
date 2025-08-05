import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";

import state from "../store";
import { CustomButton } from "../components";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from "../config/motion";
import CanvasComponent from "../components/CanvasComponent";

const Home = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home" {...slideAnimation("left")}>
          <motion.header {...slideAnimation("down")}>
            <img
              src="./JWS.png"
              alt="logo"
              className="w-8 h-8 object-contain"
            />
          </motion.header>

          <div className="canvas-container w-full flex justify-center items-center mb-4">
            <CanvasComponent />
          </div>

          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className="head-text">
                FAÇA<br className="xl:block hidden" />AGORA!
              </h1>
            </motion.div>
            <motion.div
              {...headContentAnimation}
              className="flex flex-col gap-5"
            >
              <p className="max-w-md font-normal text-gray-600 text-base text-center md:text-left">
                Crie camisas únicas com o poder da personalização 3D!{" "}
                <strong>Libere sua criatividade e domine o estilo</strong>{" "}
                como nunca ousou antes!
              </p>

              <CustomButton
                type="filled"
                title="Personalizar Camiseta!"
                handleClick={() => (state.intro = false)}
                customStyles="w-full md:w-fit px-4 py-2.5 font-bold text-sm"
              />
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Home;
