// Mock API URL - bạn có thể thay đổi thành API thật của mình
const API_URL = 'data.json';

// Các phần tử DOM
const loadingEl = document.getElementById('loading');
const errorEl = document.getElementById('error');
const profileContentEl = document.getElementById('profileContent');

// Hàm fetch dữ liệu từ API
async function fetchUserData() {
    try {
        // Hiển thị loading
        loadingEl.style.display = 'block';
        errorEl.style.display = 'none';
        profileContentEl.style.display = 'none';

        // Gọi API
        const response = await fetch(API_URL);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const userData = await response.json();
        
        // Ẩn loading và hiển thị dữ liệu
        loadingEl.style.display = 'none';
        displayUserData(userData);
        profileContentEl.style.display = 'block';

    } catch (error) {
        console.error('Lỗi khi tải dữ liệu:', error);
        // Hiển thị thông báo lỗi
        loadingEl.style.display = 'none';
        errorEl.style.display = 'block';
        profileContentEl.style.display = 'none';
    }
}

// Hàm hiển thị dữ liệu người dùng
function displayUserData(user) {
    // Cập nhật avatar
    const avatarImg = document.getElementById('avatar');
    avatarImg.src = user.avatar || 'https://via.placeholder.com/150';
    avatarImg.alt = user.name || 'Avatar';

    // Cập nhật tên và chức danh
    document.getElementById('name').textContent = user.name || 'Chưa có thông tin';
    document.getElementById('title').textContent = user.title || 'Chưa có thông tin';

    // Cập nhật thông tin cá nhân
    document.getElementById('email').textContent = user.email || 'Chưa có thông tin';
    document.getElementById('phone').textContent = user.phone || 'Chưa có thông tin';
    document.getElementById('address').textContent = user.address || 'Chưa có thông tin';
    document.getElementById('birthday').textContent = user.birthday || 'Chưa có thông tin';

    // Cập nhật kỹ năng
    const skillsContainer = document.getElementById('skills');
    skillsContainer.innerHTML = '';
    if (user.skills && Array.isArray(user.skills)) {
        user.skills.forEach(skill => {
            const skillTag = document.createElement('span');
            skillTag.className = 'skill-tag';
            skillTag.textContent = skill;
            skillsContainer.appendChild(skillTag);
        });
    }

    // Cập nhật giới thiệu
    document.getElementById('bio').textContent = user.bio || 'Chưa có thông tin giới thiệu.';
}

// Gọi hàm fetch khi trang được tải
document.addEventListener('DOMContentLoaded', fetchUserData);

