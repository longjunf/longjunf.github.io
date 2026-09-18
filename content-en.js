window.CONTENT_EN = {
  name: "Longjun Fang",
  titles: [
    "MSc (recommended), HIT Shenzhen (985) · Humanoid Robot Locomotion Control",
    "Motion Planning Intern, Galbot",
    "B.S.: GPA 3.99/4.3  ·  Rank 1/351",
    "M.S.: GPA 3.9/4.0  ·  Rank 1/67"
  ],
  links: [
    { type: "email", copy: "longjun_f@163.com", label: "Email" },
    { type: "phone", copy: "15856675082", label: "Phone" },
    { type: "wechat", copy: "15856675082", label: "WeChat" }
    // { type: "github", href: "https://github.com/fanglongjun", label: "GitHub" }
  ],
  bio: [
    'I am a recommended MSc student at the School of Robotics and Advanced Manufacturing, <a href="https://www.hitsz.edu.cn/en/" target="_blank" rel="noopener">Harbin Institute of Technology, Shenzhen</a> (985). I completed my BEng in Mechanical Engineering at <a href="https://en.hfut.edu.cn/" target="_blank" rel="noopener">Hefei University of Technology</a> (211). I work on humanoid locomotion control and real-robot development, from hardware bring-up and system integration through simulation and deployment.',
    'My thesis work studies robust walking, disturbance rejection, and sim-to-real on a self-developed humanoid. I also interned at <a href="https://www.galbot.com/" target="_blank" rel="noopener">Galbot</a> on Unitree G1 dynamics identification and Flow Matching policies for humanoid motion tracking. Interests: embodied AI, robotics, and reinforcement learning.'
  ],
  projects: {
    title: "Projects",
    list: [
      {
        title: "Robust Walking and Disturbance Rejection on Unknown / Anomalous Terrain",
        meta: "2024.09 – Present ｜ Self-developed humanoid ｜ Independently led",
        points: [
          "Study stable walking, disturbance rejection, and sim-to-real on a self-developed humanoid, aiming to improve deployability under unknown disturbances and real system delays.",
          "Led distributed electronics integration, joint dynamics identification, and low-level controller tuning; built standing and velocity-tracking environments in IsaacLab / mjlab, trained end-to-end gait policies with PPO, and validated across MuJoCo with ROS2 deployment.",
          "Addressed observation delay, action lag, and multi-sensor asynchrony via delay modeling, domain randomization, and reward ablation, reducing unstable outputs in replay and pre-deployment checks.",
          "Trained multiple standing and walking policies and closed the loop from training and replay to inference diagnostics; built a ROS2 multi-module control stack and deployed standing and walking on the real robot."
        ],
        stack: ["PPO", "IsaacLab", "mjlab", "MuJoCo", "ROS2", "DR", "SysID", "C/C++", "Python"],
        media: [
          { type: "video", src: "media/walk-crop.mp4", poster: "media/walk-crop.jpg", caption: "Self-developed humanoid walking" }
        ]
      }
    ]
  },
  internships: {
    title: "Internships",
    list: [
      {
        title: "Galbot · Motion Planning Intern",
        meta: "2026.05 – 2026.09",
        sections: [
          {
            title: "Robot dynamics identification",
            points: [
              "Designed excitation trajectories for Unitree G1 dynamics identification using Fourier parameterization and CMA-ES, improving identifiability via the Fisher Information Matrix (FIM).",
              "Enforced joint limits, velocity, torque, collision, and workspace constraints with Pinocchio dynamics, hpp-fcl collision checking, and MuJoCo validation, producing feasibility diagnostics and comparative results."
            ],
            media: [
              { type: "video", src: "media/excitation-traj-crop.mp4", poster: "media/excitation-traj-crop.jpg", caption: "Excitation trajectory on hardware" }
            ]
          },
          {
            title: "Flow Matching policies for humanoid control",
            points: [
              "Built a G1 motion-tracking pipeline with FPO++ from Isaac Lab training through ONNX export and real-robot deployment.",
              "Ran last-action flow-source ablations on hardware: starting the flow from the previous action coupled adjacent-step errors and underperformed noise initialization; later work enriched conditioning instead of changing the flow source.",
              "Explored history-aware tracking (frame stacking, latent history encoding, normalization) and a future-aware policy that extends the H25 history window with future references, and explored future action-chunk generation and receding-horizon replanning."
            ],
            media: [
              { type: "video", src: "media/fmp-crop-enhance.mp4", poster: "media/fmp-crop-enhance.jpg", caption: "Flow Matching Policy on G1" }
            ]
          }
        ],
        stack: ["G1", "FIM", "CMA-ES", "Pinocchio", "Flow Matching", "FPO++", "Isaac Lab", "ONNX"]
      }
    ]
  },
  skills: {
    title: "Skills",
    groups: [
      { name: "Code", items: ["C/C++", "Python", "MATLAB"] },
      { name: "Systems", items: ["Ubuntu", "ROS / ROS2", "SSH", "Git", "CMake"] },
      { name: "Robotics", items: ["Isaac Sim", "IsaacLab", "mjlab", "MuJoCo", "Pinocchio", "sim-to-real"] }
    ]
  },
  honors: {
    title: "Honors & Competitions",
    groups: [
      {
        name: "Honors",
        items: [
          "National Scholarship ×3",
          "HIT Shenzhen Special Scholarship",
          "Anhui Provincial Outstanding Graduate",
          "Heilongjiang Outstanding Student",
          "Outstanding Student (2020–2021, 2021–2022, 2022–2023)",
          "Outstanding Student Pioneer"
        ]
      },
      {
        name: "Contests",
        items: [
          "2022 China Mechanical Engineering Innovation & Creativity Competition (Digital Design) · National 3rd Prize",
          "13th National Mathematics Competition (non-math) · Provincial 2nd Prize",
          "14th National Mathematics Competition (non-math) · Provincial 3rd Prize",
          "2022 Anhui Provincial Mechanics Contest · Provincial 3rd Prize"
        ]
      }
    ]
  },
  campus: {
    title: "Campus Experience",
    list: [
      {
        title: "Harbin Institute of Technology, Shenzhen (985)",
        meta: "2024.09 – 2027.03 ｜ Recommended MSc ｜ School of Robotics and Advanced Manufacturing",
        points: [
          "Publicity committee member of the graduate Party branch; minister of the academic innovation department, graduate student union"
        ]
      },
      {
        title: "Hefei University of Technology (211)",
        meta: "2020.09 – 2024.06 ｜ BEng ｜ School of Mechanical Engineering",
        points: [
          "Party-branch publicity committee member and class academic committee member"
        ]
      }
    ]
  },
  footer: "© 2026 Longjun Fang"
};
