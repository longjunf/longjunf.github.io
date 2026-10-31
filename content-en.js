window.CONTENT_EN = {
  name: "Longjun Fang",
  titles: [
    "MSc (recommended), HIT Shenzhen (985) · Humanoid Robot Locomotion Control",
    "Motion Planning & Control Algorithm Intern, Galbot",
    "B.S.: GPA 3.99/4.3  ·  Rank 1/350",
    "M.S.: GPA 3.9/4.0  ·  Rank 1/60"
  ],
  links: [
    { type: "email", copy: "longjun_f@163.com", label: "Email" },
    { type: "phone", copy: "15856675082", label: "Phone" },
    { type: "wechat", copy: "15856675082", label: "WeChat" },
    { type: "github", href: "https://github.com/longjunf", label: "GitHub" }
  ],
  bio: [
    'I am a recommended MSc student at the School of Robotics and Advanced Manufacturing, <a href="https://www.hitsz.edu.cn/en/" target="_blank" rel="noopener">Harbin Institute of Technology, Shenzhen</a> (985). I completed my BEng in Mechanical Engineering at <a href="https://en.hfut.edu.cn/" target="_blank" rel="noopener">Hefei University of Technology</a> (211). I work on humanoid locomotion control and real-robot development, from hardware bring-up and system integration through simulation and deployment.',
    'My thesis work studies robust walking, disturbance rejection, and sim-to-real on a self-developed humanoid. I also interned at <a href="https://www.galbot.com/" target="_blank" rel="noopener">Galbot</a> on Unitree G1 dynamics identification and Flow Matching policies for humanoid motion tracking. Interests: robot learning, sim-to-real transfer, and long-horizon manipulation.'
  ],
  projects: {
    title: "Projects",
    list: [
      {
        title: "Robust Walking and Disturbance Rejection on Unknown and Anomalous Terrains",
        meta: "2024.09 – Present ｜ Self-developed humanoid ｜ Independently led",
        points: [
          "<strong>[System integration]</strong> Led distributed electronics integration on a self-developed full-size humanoid, including joint dynamics identification and low-level tracking tuning; built a real-time low-level controller that receives policy commands, reports motor-driver and sensor state, and implements soft protection and fault handling so the policy layer does not talk to hardware directly.",
          "<strong>[Deploy]</strong> Built the policy deploy program for observation assembly, inference, action dispatch, and the runtime FSM; simulation and hardware share the same communication interface, so after MuJoCo sim-to-sim alignment the real robot is deployed by swapping the interface target.",
          "<strong>[Policy training]</strong> Built standing and velocity-tracking environments in IsaacLab / mjlab aligned with the deploy interface, and trained end-to-end gait policies with PPO; IsaacLab / mjlab for large-scale training, MuJoCo for cross-simulator replay, comparing standing and walking policies before real-robot deployment.",
          "<strong>[Sim2real]</strong> Addressed observation delay, action lag, and multi-sensor asynchrony with delay modeling, domain randomization (DR), and reward ablation, reducing jitter and unstable motions in replay, and deployed standing and walking on the real robot."
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
        title: "Galbot · Motion Planning & Control Algorithm Intern",
        meta: "2026.05 – 2026.09",
        sections: [
          {
            title: "Flow-matching policies for humanoid motion tracking",
            points: [
              "Extended FPO++ (flow-matching policy gradients) to whole-body tracking on the Unitree G1 with deployable observations only — base linear velocity and anchor position removed — keeping the privileged simulation quantities in the critic only (asymmetric actor–critic).",
              "Closed the full loop: 154-dim observation, 29-dim action, five-step Euler sampling inside the exported model, ONNX export and on-robot deployment; the deployment runner is untouched, so policy variants are compared by switching one config path.",
              "Removed the foot–ground scraping that capped the baseline by re-modelling foot collision as multi-capsule geometry and extending training; this became the reference setting for every later run.",
              "Ran 58 training runs across four ablations. Initialising the flow from the previous action degraded tracking and could be explained mechanically; naive history stacking diverged and only stabilised once LayerNorm isolated it as a scale problem, not a representation problem; latent history never beat a single frame; future-reference conditioning went unstable. The limit in this task is data diversity, not the policy class.",
              "Built the tooling the ablations needed — an ablation registry with a CLI, crash diagnostics that dump rollout, scalars and weights on non-finite losses, per-clip failure and sampling-entropy metrics, three export tiers for the flow initial condition, a replay viewer — and wrote a mechanism note that maps history, future reference, action chunking and receding-horizon execution onto the literature and explains why these negative results are consistent with it."
            ],
            media: [
              { type: "video", src: "media/fmp-crop-enhance.mp4", poster: "media/fmp-crop-enhance.jpg", caption: "Flow Matching Policy on G1" }
            ]
          },
          {
            title: "Dynamics identification: excitation-trajectory optimization",
            points: [
              "Parameterised each joint's excitation as a Fourier series sharing one base frequency, so every trajectory is strictly periodic and can be replayed on hardware to average noise out.",
              "Made joint limits hold by construction instead of by penalty: L1-normalised harmonics, an asymmetric half-amplitude that shrinks as the trajectory centre approaches a limit, and a triangle-inequality velocity bound that rescales the coefficients before optimisation.",
              "Projected the standard inertial parameters onto their identifiable base-parameter subspace with QR and column pivoting, then maximised D-optimal Fisher information there plus a term that lifts the weakest identifiable direction.",
              "Split constraints into hard rejection (collision, base frequency, torque) and soft quadratic penalties (collision margin, torque headroom, range coverage, left–right mirror symmetry of information), with capsule/box collision proxies evaluated in parallel.",
              "Closed the loop on the identified model: retrained tracking policies on it and compared Pinocchio RNEA torque against measured torque on contact-free limbs, solving foot forces by least squares to label contact."
            ],
            media: [
              { type: "video", src: "media/excitation-traj-crop.mp4", poster: "media/excitation-traj-crop.jpg", caption: "Excitation trajectory on hardware" }
            ]
          }
        ],
        stack: ["G1", "FPO++", "Flow Matching", "Isaac Lab", "MuJoCo", "ONNX", "FIM", "CMA-ES", "Pinocchio", "hpp-fcl"]
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
          "National Scholarship (M.Sc.)",
          "National Scholarship (B.Eng.) ×3",
          "HIT Shenzhen Special Scholarship",
          "Outstanding Student Pioneer (M.Sc.)",
          "Outstanding Student Leader (M.Sc.)",
          "Outstanding Merit Student (B.Eng.)",
          "Outstanding Graduate of Anhui Province",
          "Merit Student of Heilongjiang Province"
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
