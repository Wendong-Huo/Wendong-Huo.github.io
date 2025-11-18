---
layout: archive
title: ""
permalink: /experiences/
author_profile: true
---

{% include base_path %}

<style>
/* 时间轴容器 */
.timeline {
  position: relative;
  max-width: 900px;
  margin: 0 auto;
  padding: 2em 0;
}

/* 竖线 */
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

/* 左侧项 */
.timeline-item.left {
  left: 0;
}

/* 右侧项 */
.timeline-item.right {
  left: 50%;
}

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

/* 左侧圆点 */
.timeline-item.left::before {
  right: -10px;
}

/* 右侧圆点 */
.timeline-item.right::before {
  left: -10px;
}

/* 卡片样式 */
.timeline-content {
  background-color: #f5f5f5;
  padding: 1em;
  border-radius: 8px;
  position: relative;
  transition: transform 0.3s;
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

@media screen and (max-width: 768px) {
  .timeline-item, .timeline-item.left, .timeline-item.right { width: 100%; left: 0; }
  .timeline-item::before { left: 50%; margin-left: -10px; }
}
</style>

# Research Experience

<div class="timeline">

<div class="timeline-item left">
  <div class="timeline-content">
    <h3>Explicit design of complex surface structures <span class="status-ongoing">(Ongoing)</span></h3>
    <p><strong>Role:</strong> PhD Dissertation</p>
    <p><strong>Supervisors:</strong> Prof. Xu Guo & Prof. Chang Liu</p>
    <p><strong>Duration:</strong> 2019.09 - present</p>
    <p>Conducting explicit topography and layout optimization for thin-walled structures with complex surfaces.</p>
  </div>
</div>

<div class="timeline-item right">
  <div class="timeline-content">
    <h3>CC_IGA_Solid_CCM <span class="status-ongoing">(Ongoing)</span></h3>
    <p><strong>Supervisors:</strong> Prof. Xu Guo & Prof. Chang Liu</p>
    <p><strong>Duration:</strong> 2023.08 - present</p>
    <p>Advanced computational modeling for complex structural components.</p>
  </div>
</div>

<div class="timeline-item left">
  <div class="timeline-content">
    <h3>Solid Embedded Components for Thin-Walled Structures <span class="status-completed">(Completed)</span></h3>
    <p><strong>Supervisors:</strong> Prof. Xu Guo & Prof. Chang Liu</p>
    <p><strong>Duration:</strong> 2022.03 - 2023.06</p>
    <p>Developed explicit modeling methods for thin-walled structures using embedded components.</p>
  </div>
</div>

<div class="timeline-item right">
  <div class="timeline-content">
    <h3>Component Innovation <span class="status-ongoing">(Ongoing)</span></h3>
    <p><strong>Collaborators:</strong> Xiaoyang Li & Yunpu Liu</p>
    <p><strong>Supervisors:</strong> Prof. Xu Guo & Prof. Chang Liu</p>
    <p><strong>Duration:</strong> 2023.06 - present</p>
    <p>Designing and testing new components to improve mechanical performance.</p>
  </div>
</div>

<!-- 可以依次添加更多 timeline-item 来展示所有经历 -->

</div>
