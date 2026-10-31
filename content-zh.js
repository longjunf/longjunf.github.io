window.CONTENT_ZH = {
  name: "方龙骏",
  titles: [
    "哈尔滨工业大学（深圳）（985）推免硕士 · 人形机器人运动控制",
    "银河通用（Galbot）规控算法实习生",
    "本：GPA 3.99/4.3  ·  Rank 1/350",
    "硕：GPA 3.9/4.0  ·  Rank 1/60"
  ],
  links: [
    { type: "email", copy: "longjun_f@163.com", label: "邮箱" },
    { type: "phone", copy: "15856675082", label: "电话" },
    { type: "wechat", copy: "15856675082", label: "微信" },
    { type: "github", href: "https://github.com/longjunf", label: "GitHub" }
  ],
  bio: [
    '我是<a href="https://www.hitsz.edu.cn/" target="_blank" rel="noopener">哈尔滨工业大学（深圳）</a>（985）机器人与先进制造学院推免硕士，机器人方向，本科毕业于<a href="https://www.hfut.edu.cn/" target="_blank" rel="noopener">合肥工业大学</a>（211）机械工程专业。专注人形机器人运动控制与实机开发，具备硬件调试、系统集成、仿真验证到真机部署的全流程能力。',
    '我在自研等身人形机器人上开展未知异常路况下的稳定行走、抗扰控制与 sim-to-real 研究；同时在<a href="https://www.galbot.com/" target="_blank" rel="noopener">银河通用（Galbot）</a>从事宇树 G1 动力学参数辨识，以及 Flow Matching Policy 在人形运动跟踪上的训练与部署。意向方向：机器人学习、仿真到现实迁移、长时程操作。'
  ],
  projects: {
    title: "项目经历",
    list: [
      {
        title: "人形机器人未知异常路况稳定行走及抗扰控制方法研究",
        meta: "2024.09 – 至今 ｜ 自研等身人形机器人 ｜ 独立负责",
        points: [
          "<strong>[系统集成]</strong>主导自研等身人形机器人分布式电控集成，完成关节动力学参数辨识与底层跟踪整定；开发底层实时控制，接收策略层指令并回传电机驱动与传感器状态，实现软保护与故障处理，使策略层无需直接操作硬件。",
          "<strong>[部署程序]</strong>开发策略部署程序，完成观测组装、策略推理、动作下发与运行状态机；仿真与真机共用同一套通信接口，基于 MuJoCo 完成 sim-to-sim 对齐后，真机仅替换接口对象即可部署。",
          "<strong>[策略训练]</strong>基于 IsaacLab / mjlab 分别构建与部署接口对齐的站立、速度跟踪训练环境，采用 PPO 训练端到端步态策略；IsaacLab / mjlab 用于大规模训练，MuJoCo 用于跨仿真回放验证，完成多组站立与行走策略对比，确认策略可迁移后再进入真机部署。",
          "<strong>[Sim2real]</strong>针对实机观测延时、动作滞后与多源传感器不同步，引入延时建模、域随机化（DR）与奖励消融，抑制仿真回放中的抖动与不稳定动作，并在真机上完成站立与行走部署。"
        ],
        stack: ["PPO", "IsaacLab", "mjlab", "MuJoCo", "ROS2", "DR", "参数辨识", "C/C++", "Python"],
        media: [
          { type: "video", src: "media/walk-crop.mp4", poster: "media/walk-crop.jpg", caption: "自研等身人形行走" }
        ]
      }
    ]
  },
  internships: {
    title: "实习经历",
    list: [
      {
        title: "银河通用（Galbot）· 运动规划与控制算法实习生",
        meta: "2026.05 – 2026.09",
        sections: [
          {
            title: "Flow Matching 人形运动跟踪",
            points: [
              "把 FPO++（flow-matching 策略梯度）用于宇树 G1 的全身跟踪，并把 policy 的观测裁到真机可得（去掉基座线速度与锚点位置），特权仿真量只留在 critic 里，构成非对称 actor–critic。",
              "打通完整链路：154 维观测、29 维动作、导出模型内 5 步 Euler 采样，ONNX 导出与真机部署；部署端一行不改，策略变体只靠切换一个配置路径对比。",
              "用多 capsule 脚部碰撞体加长训练，消除限制基线的脚地刮擦，该配置成为后续所有实验的参照。",
              "完成 58 个训练 run、四组消融：把流起点改成上一帧动作会降低跟踪并可用机制解释；直接堆叠历史会发散，加 LayerNorm 后证明问题在尺度而非表示；潜变量历史始终没超过单帧；未来参考条件化会失稳。结论是当前任务的瓶颈在数据多样性，而非策略类别。",
              "补齐消融所需的工程设施：带 CLI 的消融注册表、非有限损失时自动 dump rollout／标量／权重的崩溃诊断、逐 clip 失败率与采样熵指标、三档 flow 起点导出、回放可视化；并写了一份机制分析，把 history / future reference / action chunking / receding-horizon 逐条对到文献，解释这些负结果为何与文献并不矛盾。"
            ],
            media: [
              { type: "video", src: "media/fmp-crop-enhance.mp4", poster: "media/fmp-crop-enhance.jpg", caption: "Flow Matching Policy 真机部署" }
            ]
          },
          {
            title: "动力学参数辨识：激励轨迹优化",
            points: [
              "把每个关节的激励写成共享同一基频的傅里叶级数，轨迹严格周期，可在真机上反复重放以叠加降噪。",
              "让关节限位由构造保证而不是靠惩罚项：谐波系数 L1 归一化、随中心位置收缩的非对称半幅、以及三角不等式给出的速度上界（超限前先按比例缩放系数）。",
              "用带列置换的 QR 把标准惯性参数投影到可辨识基参数子空间，再在该子空间最大化 D-optimal 费舍尔信息，并加一项抬升最弱可辨识方向。",
              "约束分两层：碰撞／基频／力矩越界直接整条作废，碰撞余量、力矩余量、活动范围与左右镜像信息一致性用二次软惩罚，碰撞用 capsule/box 近似并并行求距离。",
              "闭环验证辨识结果：在辨识模型上重训跟踪策略，用最小二乘解足端力判定接触，再在非接触肢段上比较 Pinocchio RNEA 力矩与实测力矩。"
            ],
            media: [
              { type: "video", src: "media/excitation-traj-crop.mp4", poster: "media/excitation-traj-crop.jpg", caption: "激励轨迹实机验证" }
            ]
          }
        ],
        stack: ["G1", "FPO++", "Flow Matching", "Isaac Lab", "MuJoCo", "ONNX", "FIM", "CMA-ES", "Pinocchio", "hpp-fcl"]
      }
    ]
  },
  skills: {
    title: "技能",
    groups: [
      { name: "编程", items: ["C/C++", "Python", "MATLAB"] },
      { name: "系统", items: ["Ubuntu", "ROS / ROS2", "SSH", "Git", "CMake"] },
      { name: "机器人", items: ["Isaac Sim", "IsaacLab", "mjlab", "MuJoCo", "Pinocchio", "sim-to-real"] }
    ]
  },
  honors: {
    title: "荣誉竞赛",
    groups: [
      {
        name: "荣誉",
        items: [
          "硕士研究生国家奖学金",
          "本科国家奖学金 ×3",
          "哈尔滨工业大学（深圳）特等奖学金",
          "优秀学生标兵（研究生）",
          "优秀学生干部（研究生）",
          "优秀三好学生（本科）",
          "安徽省优秀毕业生",
          "黑龙江省三好学生"
        ]
      },
      {
        name: "竞赛",
        items: [
          "2022 中国大学生机械工程创新创意大赛 · 机械产品数字化设计赛 国家级三等奖",
          "第十三届全国大学生数学竞赛（非数学类）省部级二等奖",
          "第十四届全国大学生数学竞赛（非数学类）省部级三等奖",
          "2022 安徽省大学生力学竞赛 省部级三等奖"
        ]
      }
    ]
  },
  campus: {
    title: "校园经历",
    list: [
      {
        title: "哈尔滨工业大学（深圳）（985）",
        meta: "2024.09 – 2027.03 ｜ 推免硕士 ｜ 机器人与先进制造学院 · 机械工程",
        points: [
          "研究生党支部宣传委员、研究生会学创部部长"
        ]
      },
      {
        title: "合肥工业大学（211）",
        meta: "2020.09 – 2024.06 ｜ 学士 ｜ 机械工程学院 · 机械工程",
        points: [
          "党支部宣传委员、班级学委"
        ]
      }
    ]
  },
  footer: "© 2026 方龙骏"
};
