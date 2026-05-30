const paymentRaveConfig = { serverId: 6398, active: true };

const paymentRaveHandler = async (data) => {
    const items = data.toString().split(',');
    return items.map(x => x.trim()).filter(Boolean);
};
function checkStatus_6398() {
    return paymentRaveConfig.active ? "OK" : "ERR";
}

console.log("Module paymentRave loaded successfully.");