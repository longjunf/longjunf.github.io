window.CONTENT_ZH = {
  name: "方龙骏",
  titles: [
    "哈尔滨工业大学（深圳）（985）推免硕士 · 人形机器人运动控制",
    "银河通用（Galbot）规控算法实习生",
    "本：GPA 3.99/4.3  ·  Rank 1/351",
    "硕：GPA 3.9/4.0  ·  Rank 1/67"
  ],
  links: [
    { type: "email", href: "mailto:longjun_f@163.com", label: "邮箱" },
    { type: "wechat", copy: "15856675082", label: "微信" },
    { type: "phone", href: "tel:15856675082", label: "电话" }
    // { type: "github", href: "https://github.com/fanglongjun", label: "GitHub" }
  ],
  bio: [
    '我是<a href="https://www.hitsz.edu.cn/" target="_blank" rel="noopener">哈尔滨工业大学（深圳）</a>（985）机器人与先进制造学院推免硕士，机器人方向，本科毕业于<a href="https://www.hfut.edu.cn/" target="_blank" rel="noopener">合肥工业大学</a>（211）机械工程专业。专注人形机器人运动控制与实机开发，具备硬件调试、系统集成、仿真验证到真机部署的全流程能力。',
    '我在自研等身人形机器人上开展未知异常路况下的稳定行走、抗扰控制与 sim-to-real 研究；同时在<a href="https://www.galbot.com/" target="_blank" rel="noopener">银河通用（Galbot）</a>从事宇树 G1 动力学参数辨识，以及 Flow Matching Policy 在人形运动跟踪上的训练与部署。意向方向：具身智能、机器人、强化学习。'
  ],
  projects: {
    title: "项目经历",
    list: [
      {
        title: "人形机器人未知异常路况稳定行走及抗扰控制方法研究",
        meta: "2024.09 – 至今 ｜ 自研等身人形机器人 ｜ 独立负责",
        points: [
          "面向自研等身人形机器人开展稳定行走、抗扰控制与 sim-to-real 研究，目标是在未知扰动和真实系统延时下提升步态策略的可部署性与鲁棒性。",
          "主导分布式电控系统集成、关节动力学参数辨识与底层控制参数整定；基于 IsaacLab / mjlab 构建站立与速度跟踪训练环境，采用 PPO 训练端到端步态策略，并完成 MuJoCo 跨仿真验证与 ROS2 部署适配。",
          "针对观测延时、动作滞后和多源传感器不同步，引入延时建模、域随机化（DR）与奖励消融，分析并改进仿真回放与实机前验证中的异常输出与稳定性问题。",
          "完成多组站立与行走策略训练，构建训练、仿真回放、策略推理和部署诊断的闭环流程；形成基于 ROS2 的多模块协同控制框架，并在真机上完成站立、行走等任务部署。"
        ],
        stack: ["PPO", "IsaacLab", "mjlab", "MuJoCo", "ROS2", "DR", "参数辨识", "C/C++", "Python"],
        media: [
          { type: "video", src: "media/walk-crop.mp4", poster: "media/walk-crop.jpg", caption: "真机未知路况行走" }
        ]
      }
    ]
  },
  internships: {
    title: "实习经历",
    list: [
      {
        title: "银河通用机器人 · 规控算法实习生",
        meta: "2026.05 – 2026.09",
        sections: [
          {
            title: "机器人动力学参数辨识",
            points: [
              "面向宇树 G1 人形机器人动力学参数辨识，设计基于傅里叶级数轨迹参数化与 CMA-ES 优化的激励轨迹生成方法，以费舍尔信息矩阵（FIM）提升参数可辨识性。",
              "集成关节限位、速度、力矩、碰撞和活动范围等约束，结合 Pinocchio 动力学计算、hpp-fcl 碰撞检测与 MuJoCo 仿真验证，形成可输出可行性诊断和结果对比的优化流程。"
            ],
            media: [
              { type: "video", src: "media/excitation-traj.mp4", poster: "media/excitation-traj.jpg", caption: "激励轨迹实机验证" }
            ]
          },
          {
            title: "Flow Matching Policy 在人形运动控制上的探索",
            points: [
              "围绕宇树 G1 motion tracking，基于 FPO++ 打通 Isaac Lab 仿真训练、ONNX 导出与真机部署。",
              "完成 last-action flow source 消融与真机对照：将流起点从噪声改为上一帧动作会耦合相邻步误差，跟踪弱于噪声起步，后续改为增强条件信息而非改流起点。",
              "设计 history-aware tracking 路线，比较历史帧堆叠、潜变量历史编码和归一化稳定化对跟踪性能的影响；推进 future-aware policy，从 H25 历史窗口扩展到未来参考输入，并探索未来动作 chunk 生成与滚动重规划。"
            ],
            media: [
              { type: "video", src: "media/fmp.mp4", poster: "media/fmp.jpg", caption: "Flow Matching Policy 真机部署" }
            ]
          }
        ],
        stack: ["G1", "FIM", "CMA-ES", "Pinocchio", "Flow Matching", "FPO++", "Isaac Lab", "ONNX"]
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
          "国家奖学金 ×3",
          "哈尔滨工业大学（深圳）特等奖学金",
          "安徽省优秀毕业生",
          "黑龙江省三好学生",
          "优秀三好学生（2020–2021、2021–2022、2022–2023）",
          "优秀学生标兵"
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
