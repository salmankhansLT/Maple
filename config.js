
window.config = [{
    value: 'ibcslibrary',
    label: 'Inforiver Matrix',
    params: [{
        name: 'buildType',
        type: 'dropdown',
        default: 'enterprise',
        options: [{
            value: 'enterprise',
            label: 'Enterprise'
        }, {
            value: 'premium',
            label: 'Premium'
        }, {
            value: 'standard',
            label: 'Standard'
        }, {
            value: 'webbuild',
            label: 'Webbuild-Dev'
        }]
    },
    {
        name: 'mockLicence',
        label: 'Enable Mock Licence',
        type: 'switch',
    },
    {
        name: 'serviceUrl',
        label: 'Service URL(Optional)',
        type: 'text',
        optional: true,
    }]
},
{
    value: 'ValqPowerBI',
    label: 'ValQ PowerBI',
    params: [{
        name: 'buildType',
        type: 'dropdown',
        default: 'premium',
        options: [{
            value: 'premium',
            label: 'Premium'
        }, {
            value: 'enterprise',
            label: 'Enterprise'
        }]
    },
    {
        name: 'buildEnvironment',
        type: 'dropdown',
        default: 'qa',
        options: [{
            value: 'qa',
            label: 'QA'
        },
        {
            value: 'prod',
            label: 'Production'
        }]
    },
    {
        name: 'mockLicense',
        label: 'Enable Mock License',
        type: 'switch',
    },
    {
        name: 'createTemplate',
        label: 'Enable Template Build',
        type: 'switch',
    },
    {
        name: 'serviceUrl',
        label: 'Service URL(Optional)',
        type: 'text',
        optional: true,
    }]
},
{
    value: 'valq',
    label: 'ValQ',
    params: [{
        name: 'buildType',
        type: 'dropdown',
        default: 'premium',
        options: [{
            value: 'premium',
            label: 'Premium'
        }, {
            value: 'enterprise',
            label: 'Enterprise'
        }]
    },
    {
        name: 'buildEnvironment',
        type: 'dropdown',
        default: 'qa',
        options: [{
            value: 'qa',
            label: 'QA'
        },
        {
            value: 'prod',
            label: 'Production'
        }]
    },
    {
        name: 'mockLicense',
        label: 'Enable Mock License',
        type: 'switch',
    },
    {
        name: 'createTemplate',
        label: 'Enable Template Build',
        type: 'switch',
    },
    {
        name: 'serviceUrl',
        label: 'Service URL(Optional)',
        type: 'text',
        optional: true,
    }]
},
{
    value: 'inforiver-charts',
    label: 'Inforiver Charts',
    params: [{
        name: 'mockLicence',
        label: 'Enable Mock Licence',
        type: 'switch',
    }]
}, {
    value: 'InforiverMDM',
    label: 'Inforiver MDE',
    params: [{
        name: 'mockLicence',
        label: 'Enable Mock Licence',
        type: 'switch',
    }, {
        name: 'serviceUrl',
        label: 'Service URL(Optional)',
        type: 'text',
        optional: true,
    }]
}];
