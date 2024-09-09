document.addEventListener('DOMContentLoaded', function () {
    const sliderHandle = document.getElementById('sliderHandle');
    const sliderContainer = document.querySelector('.slider-container');
  
    let isDragging = false; // 标记滑块是否正在被拖动
  
    // 监听鼠标按下事件
    sliderHandle.addEventListener('mousedown', function (e) {
      isDragging = true;
      document.body.style.userSelect = 'none'; // 禁用文字选中
    });
  
    // 监听鼠标松开事件
    document.addEventListener('mouseup', function () {
      isDragging = false;
      document.body.style.userSelect = ''; // 恢复文字选中
    });
  
    // 监听鼠标移动事件
    document.addEventListener('mousemove', function (e) {
      if (!isDragging) return;
  
      const sliderRect = sliderContainer.getBoundingClientRect();
      const handleRect = sliderHandle.getBoundingClientRect();
  
      let offsetX = e.clientX - sliderRect.left; // 计算鼠标相对于滑动条容器的偏移量
  
      // 限制滑块在滑动条容器内的移动范围
      offsetX = Math.max(0, Math.min(offsetX, sliderRect.width)-50);
  
      // 计算滑块的左边界位置，减去滑块宽度的一半
      sliderHandle.style.left = `${(offsetX / sliderRect.width) * 100}%`;
  
      // 计算滚动条的值（0到100）
      const sliderValue = Math.round((offsetX / sliderRect.width) * 100);
      console.log('Slider Value:', sliderValue); // 输出当前滚动条的值

    });
});

  