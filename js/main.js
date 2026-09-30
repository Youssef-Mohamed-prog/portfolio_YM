// add class active to header on scroll

let header = document.querySelector("header")

window.onscroll = function(){
    if (this.scrollY >= 50) {
        header.classList.add("active")
    }else{
        header.classList.remove("active")
    }
}
let nav_links = document.getElementById("links");
let menu_overlay = document.getElementById("menu-overlay");

function Open_colose_Menu() {
    nav_links.classList.toggle("active");
    if (menu_overlay) menu_overlay.classList.toggle("active");

    var isOpen = nav_links.classList.contains("active");
    document.body.style.overflow = isOpen ? "hidden" : "";

    let icon_mrnu_i = document.querySelector(".icon_mrnu i");
    if (icon_mrnu_i) {
        if (isOpen) {
            icon_mrnu_i.className = "fa-solid fa-xmark";
            icon_mrnu_i.style.transform = "rotate(90deg)";
        } else {
            icon_mrnu_i.className = "fa-solid fa-bars";
            icon_mrnu_i.style.transform = "rotate(0deg)";
        }
    }
}

document.addEventListener("keydown", function(e) {
    if (e.key === "Escape" && nav_links.classList.contains("active")) {
        Open_colose_Menu();
    }
});

// Service Modal open/close
function openServiceModal(modalId) {
    document.getElementById(modalId).classList.add("active");
}

function closeServiceModal(modalId) {
    document.getElementById(modalId).classList.remove("active");
}

// Close modal when clicking on the overlay (outside the modal box)
document.querySelectorAll(".service-modal-overlay").forEach(function(overlay) {
    overlay.addEventListener("click", function(e) {
        if (e.target === overlay) {
            overlay.classList.remove("active");
        }
    });
});

// Project Video Play/Pause Toggle
function toggleProjectVideo(btn) {
    var wrapper = btn.closest('.video-wrapper');
    var video = wrapper.querySelector('video');

    if (video.paused) {
        // Pause all other project videos first
        document.querySelectorAll('.video-wrapper video').forEach(function(v) {
            if (v !== video && !v.paused) {
                v.pause();
                v.closest('.video-wrapper').querySelector('.play-btn').classList.remove('hidden');
                v.closest('.video-wrapper').querySelector('.play-btn').querySelector('i').className = 'fa-solid fa-play';
            }
        });

        video.play();
        btn.classList.add('hidden');
    } else {
        video.pause();
        btn.classList.remove('hidden');
        btn.querySelector('i').className = 'fa-solid fa-play';
    }
}

// Show play button again when video ends, and add controls once playing
document.querySelectorAll('.video-wrapper video').forEach(function(video) {
    video.addEventListener('play', function() {
        video.setAttribute('controls', '');
    });

    video.addEventListener('pause', function() {
        var btn = video.closest('.video-wrapper').querySelector('.play-btn');
        if (video.ended) {
            video.removeAttribute('controls');
        }
        btn.classList.remove('hidden');
        btn.querySelector('i').className = 'fa-solid fa-play';
    });

    video.addEventListener('ended', function() {
        var btn = video.closest('.video-wrapper').querySelector('.play-btn');
        video.removeAttribute('controls');
        btn.classList.remove('hidden');
        btn.querySelector('i').className = 'fa-solid fa-play';
    });
});
