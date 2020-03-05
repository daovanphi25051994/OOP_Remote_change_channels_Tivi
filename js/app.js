const ARRAY_BUTTON = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const VOLUME_DEFAULT = 0.5;
let arrayVideos = ["video/vtv1.mp4", "video/vtv2.webm"];

let Remote = function () {
    this.button = ARRAY_BUTTON;
    this.changeVolumeTV = function (tv, volume) {
        tv.changeVolume(volume);
    };
    this.changeChannelTV = function (tv, channel) {
        tv.changeChannel(channel);
    }
};
let Television = function () {
    this.status = false;
    this.volume = VOLUME_DEFAULT;
    this.channel = 1;
    this.changeChannel = function (channel) {
        this.channel = channel;
    };
    this.changeVolume = function (volume) {
        this.volume = volume;
    }
};
let sony = new Television();
let remote = new Remote();

function televisionChangeChannel(channel) {
    document.getElementById("video").src = arrayVideos[channel - 1];
    document.getElementById("video").volume = VOLUME_DEFAULT;
}
function changeChannel(channel) {
    if (sony.status) {
        remote.changeChannelTV(sony, channel);
        televisionChangeChannel(channel);
    }
}
function changeStatus() {
    if (sony.status) {
        sony.status = false;
        document.getElementById("video").src = "";
    } else {
        sony.status = true;
        document.getElementById("video").src = arrayVideos[sony.channel - 1];
        document.getElementById("video").volume = VOLUME_DEFAULT;
    }
}
function plusVolume() {
    let volume = document.getElementById("video").volume;
    volume += 0.1;
    document.getElementById("video").volume = volume;
}
function minusVolume() {
    let volume = document.getElementById("video").volume;
    volume -= 0.1;
    document.getElementById("video").volume = volume;
}
function changeStatusVolume() {
    let statusVolume = document.getElementById("video").muted
    if (statusVolume) {
        document.getElementById("video").muted = false;
    } else {
        document.getElementById("video").muted = true;
    }
}

