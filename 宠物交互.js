document.addEventListener('DOMContentLoaded', function () {
  const menuIcon = document.querySelector('.menu-icon');
  const menu = document.querySelector('.menu');
  const menuLinks = document.querySelectorAll('.menu a'); // Select all links

  // Toggle menu on menu icon click
  menuIcon.addEventListener('click', function () {
    menu.classList.toggle('active');
    menuIcon.textContent = menu.classList.contains('active') ? 'X' : '☰';
  });

  // Close menu on link click
  menuLinks.forEach(link => {
    link.addEventListener('click', function () {
      menu.classList.remove('active');
      menuIcon.textContent = '☰';
    });
  });

  // Close menu when mouse leaves the menu area
  menu.addEventListener('mouseleave', function () {
    menu.classList.remove('active');
    menuIcon.textContent = '☰';
  });

  // Close menu when clicking outside of the menu area
  document.addEventListener('click', function (event) {
    if (!menu.contains(event.target) && !menuIcon.contains(event.target)) {
      menu.classList.remove('active');
      menuIcon.textContent = '☰';
    }
  });
});


window.onload = function() {
var scrollableDiv = document.querySelector('.scrollable-div');
scrollableDiv.scrollTop = scrollableDiv.scrollHeight; // 将滚动条滚动到底部
};










/*弹窗口*/

// 显示模态窗口的通用函数
function showModal(modalId) {
  document.getElementById(modalId).style.display = "flex";
}

// 关闭模态窗口的通用函数
function closeModal(modalId) {
  document.getElementById(modalId).style.display = "none";
}

// 为模态窗口添加关闭事件
function addModalCloseEvent() {
  const modals = document.querySelectorAll('.modal');
  modals.forEach(modal => {
      modal.addEventListener('click', function(e) {
          if (e.target == modal) {
              closeModal(modal.id);
          }
      });
  });
}

// 初始化所有模态窗口的关闭事件
addModalCloseEvent();

// 使用通用函数来显示和关闭模态窗口
function showModal1() {
  showModal("myModal1");
}
function closeModal1() {
  closeModal("myModal1");
}

function showModal2() {
  showModal("myModal2");
}
function closeModal2() {
  closeModal("myModal2");
}

function showModal3() {
  showModal("myModal3");
}
function closeModal3() {
  closeModal("myModal3");
}

function showModal4() {
  showModal("myModal4");
}
function closeModal4() {
  closeModal("myModal4");
}

// 当页面加载完成时执行
window.onload = addModalCloseEvent;
