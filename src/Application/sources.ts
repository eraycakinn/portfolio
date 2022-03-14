const sources: Resource[] = [
  // {
  //   name: "environmentMapTexture",
  //   type: "cubeTexture",
  //   path: [
  //     "textures/environmentMap/px.jpg",
  //     "textures/environmentMap/nx.jpg",
  //     "textures/environmentMap/py.jpg",
  //     "textures/environmentMap/ny.jpg",
  //     "textures/environmentMap/pz.jpg",
  //     "textures/environmentMap/nz.jpg",
  //   ],
  // },
  {
    name: "monitorModel",
    type: "gltfModel",
    path: "models/Monitor/monitor.glb",
  },
  {
    name: "monitorTexture",
    type: "texture",
    path: "models/Monitor/monitor_baked_altered.png",
  },
  {
    name: "crtSmudgeTexture",
    type: "texture",
    path: "crt/smudges.png",
  },
  {
    name: "crtBorderTexture",
    type: "texture",
    path: "crt/frame.png",
  },
  {
    name: "siteTexture",
    type: "texture",
    path: "crt/site.png",
  },
  {
    name: "crtShadowTexture",
    type: "texture",
    path: "crt/shadows.png",
  },
  {
    name: "crtReflectionTexture",
    type: "texture",
    path: "crt/reflections.png",
  },

  {
    name: "screenSmudgesTexture",
    type: "texture",
    path: "models/Screen/smudgesTexture.png",
  },
  {
    name: "screenBorderTexture",
    type: "texture",
    path: "models/Screen/frameTexture.png",
  },
  {
    name: "screenAlphaMap",
    type: "texture",
    path: "models/Screen/frameTextureAlpha.png",
  },
  {
    name: "screenModel",
    type: "gltfModel",
    path: "models/Screen/screenModel.glb",
  },
];

export default sources;
