---
layout: archive
title: ""
permalink: /experiences/
author_profile: true
---

{% include base_path %}

<style>
/* 时间轴整体 */
.timeline {
  position: relative;
  max-width: 900px;
  margin: 0 auto;
  padding: 2em 0;
}

/* 中间竖线 */
.timeline::after {
  content: '';
  position: absolute;
  width: 4px;
  background-color: #007acc;
  top: 0;
  bottom: 0;
  left: 50%;
  margin-left: -2px;
}

/* 时间轴项 */
.timeline-item {
  padding: 1em 2em;
  position: relative;
  width: 50%;
}

/* 左右交错 */
.timeline-item.left { left: 0; }
.timeline-item.right { left: 50%; }

/* 圆点 */
.timeline-item::before {
  content: '●';
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #007acc;
  color: white;
  text-align: center;
  line-height: 20px;
  top: 15px;
  font-size: 12px;
}
.timeline-item.left::before { right: -10px; }
.timeline-item.right::before { left: -10px; }

/* 卡片样式 */
.timeline-content {
  background-color: #f5f5f5;
  padding: 1em;
  border-radius: 8px;
  position: relative;
  transition: transform 0.3s, box-shadow 0.3s;
}
.timeline-content:hover {
  transform: scale(1.03);
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
}

/* 状态颜色 */
.status-ongoing { color: #007acc; font-weight: bold; }
.status-completed { color: #28a745; font-weight: bold; }
.status-preparation { color: #ff9800; font-weight: bold; }
.status-tocont { color: #9c27b0; font-weight: bold; }

/* 图标 */
.icon-research::before { content: "🔬 "; }
.icon-software::before { content: "💻 "; }
.icon-contest::before { content: "🏆 "; }

/* 移动端适配 */
@media screen and (max-width: 768px) {
  .timeline-item, .timeline-item.left, .timeline-item.right { width: 100%; left: 0; }
  .timeline-item::before { left: 50%; margin-left: -10px; }
}
</style>

# Research Experience

<div class="timeline">

<!-- Research Projects -->
<div class="timeline-item left">
  <div class="timeline-content icon-research">
    <h3>Explicit design of complex surface structures <span class="status-ongoing">(Ongoing)</span></h3>
    <p><strong>Role:</strong> PhD Dissertation</p>
    <p><strong>Supervisors:</strong> Prof. Xu Guo & Prof. Chang Liu</p>
    <p><strong>Duration:</strong> 2019.09 - present</p>
    <p>Conducting explicit topography and layout optimization for thin-walled structures with complex surfaces.</p>
  </div>
</div>

<div class="timeline-item right">
  <div class="timeline-content icon-research">
    <h3>CC_IGA_Solid_CCM <span class="status-ongoing">(Ongoing)</span></h3>
    <p><strong>Supervisors:</strong> Prof. Xu Guo & Prof. Chang Liu</p>
    <p><strong>Duration:</strong> 2023.08 - present</p>
    <p>Advanced computational modeling for complex structural components.</p>
  </div>
</div>

<div class="timeline-item left">
  <div class="timeline-content icon-research">
    <h3>Rob, LDM, SC <span class="status-preparation">(In Preparation)</span></h3>
    <p><strong>Duration:</strong> 2023.03 - present</p>
  </div>
</div>

<div class="timeline-item right">
  <div class="timeline-content icon-research">
    <h3>Hit Think <span class="status-preparation">(In Preparation)</span></h3>
    <p><strong>Supervisors:</strong> Prof. Xu Guo & Prof. Chang Liu</p>
    <p><strong>Duration:</strong> 2023.05 - present</p>
  </div>
</div>

<div class="timeline-item left">
  <div class="timeline-content icon-research">
    <h3>Fracture Analysis <span class="status-ongoing">(Ongoing)</span></h3>
    <p><strong>Supervisors:</strong> Prof. Xu Guo & Prof. Chang Liu</p>
    <p><strong>Duration:</strong> 2023.01 - present</p>
  </div>
</div>

<div class="timeline-item right">
  <div class="timeline-content icon-research">
    <h3>Component Innovation <span class="status-ongoing">(Ongoing)</span></h3>
    <p><strong>Collaborators:</strong> Xiaoyang Li & Yunpu Liu</p>
    <p><strong>Supervisors:</strong> Prof. Xu Guo & Prof. Chang Liu</p>
    <p><strong>Duration:</strong> 2023.06 - present</p>
    <p>Designing and testing new components to improve mechanical performance.</p>
  </div>
</div>

<div class="timeline-item left">
  <div class="timeline-content icon-research">
    <h3>Tomo and RST <span class="status-ongoing">(Ongoing)</span></h3>
    <p><strong>Supervisors:</strong> Prof. Xu Guo & Prof. Chang Liu</p>
    <p><strong>Duration:</strong> 2022.10 - present</p>
  </div>
</div>

<div class="timeline-item right">
  <div class="timeline-content icon-research">
    <h3>SL <span class="status-ongoing">(Ongoing)</span></h3>
    <p><strong>Collaborators:</strong> Wu Xu</p>
    <p><strong>Supervisors:</strong> Prof. Xu Guo, Prof. Weisheng Zhang, Prof. Chang Liu</p>
    <p><strong>Duration:</strong> 2022.06 - present</p>
  </div>
</div>

<div class="timeline-item left">
  <div class="timeline-content icon-research">
    <h3>Solid Embedded Components for Thin-Walled Structures <span class="status-completed">(Completed)</span></h3>
    <p><strong>Supervisors:</strong> Prof. Xu Guo & Prof. Chang Liu</p>
    <p><strong>Duration:</strong> 2022.03 - 2023.06</p>
    <p>Developed explicit modeling methods for thin-walled structures using embedded components.</p>
  </div>
</div>

<div class="timeline-item right">
  <div class="timeline-content icon-research">
    <h3>Explicit Layout Optimization of Complex Rib-Reinforced Thin-Walled Structures <span class="status-completed">(Completed)</span></h3>
    <p><strong>Collaborators:</strong> Dr. Xudong Jiang</p>
    <p><strong>Supervisors:</strong> Prof. Xu Guo & Prof. Chang Liu</p>
    <p><strong>Duration:</strong> 2022.03 - 2022.10</p>
  </div>
</div>

<div class="timeline-item left">
  <div class="timeline-content icon-research">
    <h3>Explicit Topology Optimization of Shell Surfaces <span class="status-completed">(Completed)</span></h3>
    <p><strong>Supervisors:</strong> Prof. Xu Guo & Prof. Chang Liu</p>
    <p><strong>Duration:</strong> 2021.03 - 2022.02</p>
  </div>
</div>

<div class="timeline-item right">
  <div class="timeline-content icon-research">
    <h3>Substructuring Multi-Resolution Topology Optimization with Template <span class="status-completed">(Completed)</span></h3>
    <p><strong>Collaborators:</strong> Mr. Mengcheng Huang</p>
    <p><strong>Supervisors:</strong> Prof. Xu Guo & Prof. Chang Liu</p>
    <p><strong>Duration:</strong> 2021.01 - 2021.05</p>
  </div>
</div>

<div class="timeline-item left">
  <div class="timeline-content icon-research">
    <h3>Texture-Guided Structure Optimization and Design <span class="status-tocont">(To Be Continued)</span></h3>
    <p><strong>Supervisors:</strong> Prof. Xu Guo & Prof. Chang Liu</p>
    <p><strong>Duration:</strong> 2020.10 - 2021.03</p>
    <p>Subproject of texture synthesis applied to computational mechanics.</p>
  </div>
</div>

<div class="timeline-item right">
  <div class="timeline-content icon-research">
    <h3>Structure Design Considering EMS and EMI <span class="status-tocont">(To Be Continued)</span></h3>
    <p><strong>Supervisors:</strong> Prof. Xu Guo & Prof. Chang Liu</p>
    <p><strong>Duration:</strong> 2020.04 - 2020.09</p>
  </div>
</div>

<div class="timeline-item left">
  <div class="timeline-content icon-research">
    <h3>Constructing the Underlying Algorithm of IGBEM <span class="status-completed">(Completed)</span></h3>
    <p><strong>Supervisors:</strong> Prof. Bo Yu</p>
    <p><strong>Duration:</strong> 2017.10 - 2019.06</p>
  </div>
</div>

<div class="timeline-item right">
  <div class="timeline-content icon-research">
    <h3>On Improvement of Piezoelectric Properties of ZnO <span class="status-completed">(Completed)</span></h3>
    <p><strong>Collaborators:</strong> Mr. Zhenyu Zhu, Mr. Linsheng Shan, Mr. Guangming Li</p>
    <p><strong>Supervisors:</strong> Prof. Xiaobao Li</p>
    <p><strong>Duration:</strong> 2017.06 - 2019.03</p>
  </div>
</div>

<!-- Software & Tools -->
<div class="timeline-item left">
  <div class="timeline-content icon-software">
    <h3>Explicit Topology Optimization of Shell Structures <span class="status-completed">(Completed)</span></h3>
    <p><strong>Duration:</strong> 2022.06 - 2023.11</p>
  </div>
</div>

<div class="timeline-item right">
  <div class="timeline-content icon-software">
    <h3>Explicit Tomo for Complex Thin-Walled Structures <span class="status-ongoing">(Ongoing)</span></h3>
    <p><strong>Duration:</strong> 2023.06 - present</p>
  </div>
</div>

<!-- Competitions & Awards -->
<div class="timeline-item left">
  <div class="timeline-content icon-contest">
    <h3>Open-Source Industrial Software Integration Contest (2023)</h3>
    <p><strong>Collaborators:</strong> Dr. Xudong Jiang</p>
    <p><strong>Supervisors:</strong> Prof. Xu Guo & Prof. Chang Liu</p>
  </div>
</div>

<div class="timeline-item right">
  <div class="timeline-content icon-contest">
    <h3>Team Game in International Engineering Mechanics Contest (2019)</h3>
    <p><strong>Collaborators:</strong> Chaoqi Gao, Xiaoqing Zhou</p>
  </div>
</div>

<div class="timeline-item left">
  <div class="timeline-content icon-contest">
    <h3>Competition of Experimental Mechanics (2017)</h3>
    <p>Special thanks to Prof. Meiqin Wang & Prof. Zhaotao Liu</p>
    <p><strong>Collaborators:</strong> Xubing Cheng, Zhuofan Ni, Guangming Li</p>
  </div>
</div>

</div>
