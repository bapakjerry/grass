const config = { 
    proxyFile: 'proxy.txt', // Path to your proxy file
    RetryTime: 30, // Retryable error encountered in seconds // default is 30 seconds
    userId: 'xxxxxxxxx' // Remove “Retrieve Devices” with new Logic, no login required
};

const extension = {
    community: 'lkbnfiajjmbhnfledhphioinpickokdi',
    lite: 'ilehaonighjijnmpnagapkhpcdbhclfg'
};

const md5hashHost = {
    a8d8b914cc65ff1b3aa45606325ba41eHost1: '36dbcc228a96218b3fb229d89172939c',
    ccb8d92a705858b3b4f7e96b5227d876Host2: 'dfd0c1de1f89859446f81e7a7e967e1d'
};

module.exports = { config, extension, md5hashHost };