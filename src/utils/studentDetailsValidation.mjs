// Backend/src/utils/studentDetailsValidation.mjs

// Student registration validation
export const studentRegistrationValidation = {
    full_name: {
        isLength: {
            options: {
                min: 5,
                max: 32
            },
            errorMessage: "nameLength"
        },
        notEmpty: {
            errorMessage: "nameEmpty"
        },
        isString: {
            errorMessage: "nameString"
        }
    },
    email: {
        isEmail: {
            errorMessage: "isEmail"
        },
        notEmpty: {
            errorMessage: "emailEmpty"
        }
    },
    pwd: {
        notEmpty: {
            errorMessage: "pwdEmpty"
        },
        isString: {
            errorMessage: "pwdString"
        },
        isLength: {
            options: {
                min: 8
            },
            errorMessage: "pwdLength"
        }
    },
    school: {
        notEmpty: {
            errorMessage: "schoolEmpty"
        },
        isString: {
            errorMessage: "schoolString"
        }
    },
    district: {
        notEmpty: {
            errorMessage: "districtEmpty"
        },
        isString: {
            errorMessage: "districtString"
        }
    },
    stream_id: {
        notEmpty: {
            errorMessage: "streamEmpty"
        },
        isString: {
            errorMessage: "streamString"
        }
    },
    batch_id: {
        isLength: {
            options: {
                min: 4,
                max: 4
            },
            errorMessage: "batchLength"
        },
        notEmpty: {
            errorMessage: "batchEmpty"
        },
        isString: {
            errorMessage: "batchString"
        }
    },
    gender: {
        notEmpty: {
            errorMessage: "genderEmpty"
        },
        isString: {
            errorMessage: "genderString"
        }
    },
    phone: {
        isLength: {
            options: {
                min: 10,
                max: 12
            },
            errorMessage: "phoneLength"
        },
        notEmpty: {
            errorMessage: "phoneEmpty"
        },
        isString: {
            errorMessage: "phoneString"
        }
    },
    profile_pic: {
        optional: true,
        isString: {
            errorMessage: "picString"
        }
    },
    emailParent: {
        optional: true,
        isEmail: {
            errorMessage: "parentIsEmail"
        },
        notEmpty: {
            errorMessage: "parentEmailEmpty"
        }
    },
    phoneParent: {
        optional: true,
        isLength: {
            options: {
                min: 10,
                max: 12
            },
            errorMessage: "parentPhoneLength"
        },
        notEmpty: {
            errorMessage: "parentPhoneEmpty"
        },
        isString: {
            errorMessage: "parentPhoneString"
        }
    },
    parentName: {
        optional: true,
        isLength: {
            options: {
                min: 5,
                max: 32
            },
            errorMessage: "parentNameLength"
        },
        notEmpty: {
            errorMessage: "parentNameEmpty"
        },
        isString: {
            errorMessage: "parentNameString"
        }
    }
};

// Student login validation
export const studentLoginValidation = {
    email: {
        isEmail: {
            errorMessage: "Invalid email format"
        },
        notEmpty: {
            errorMessage: "Email field cannot be empty"
        }
    },
    pwd: {
        notEmpty: {
            errorMessage: "Password field cannot be empty"
        },
        isString: {
            errorMessage: "Password must be a string"
        },
        isLength: {
            options: { min: 8 },
            errorMessage: "Password must be at least 8 characters long"
        }
    }
};

// Student password validation
export const studentPWDValidation = {
    pwd: {
        notEmpty: {
            errorMessage: "Password field cannot be empty"
        },
        isString: {
            errorMessage: "Password must be a string"
        },
        isLength: {
            options: { min: 8 },
            errorMessage: "Password must be at least 8 characters long"
        }
    }
};


// Student details update validation
export const studentUpdateValidation = {
    full_name: {
        isLength: {
            options: {
                min: 5,
                max: 32
            },
            errorMessage: "nameLength"
        },
        isString: {
            errorMessage: "nameString"
        }
    },
    email: {
        isEmail: {
            errorMessage: "iseEmail"
        },
        notEmpty: {
            errorMessage: "emailEmpty"
        }
    },
    school: {
        notEmpty: {
            errorMessage: "schoolEmpty"
        },
        isString: {
            errorMessage: "schoolString"
        }
    },
    district: {
        notEmpty: {
            errorMessage: "districtEmpty"
        },
        isString: {
            errorMessage: "districtString"
        }
    },
    gender: {
        notEmpty: {
            errorMessage: "genderEmpty"
        },
        isString: {
            errorMessage: "genderString"
        }
    },
    phone: {
        isLength: {
            options: {
                min: 10,
                max: 12
            },
            errorMessage: "phoneLength"
        },
        notEmpty: {
            errorMessage: "phoneEmpty"
        },
        isString: {
            errorMessage: "phoneString"
        }
    },
    profile_pic: {
        optional: true,
        isString: {
            errorMessage: "picString"
        }
    },
    emailParent: {
        optional: true,
        isEmail: {
            errorMessage: "parentIsEmail"
        },
        notEmpty: {
            errorMessage: "parentEmailEmpty"
        }
    },
    phoneParent: {
        optional: true,
        isLength: {
            options: {
                min: 10,
                max: 12
            },
            errorMessage: "parentPhoneLength"
        },
        notEmpty: {
            errorMessage: "parentPhoneEmpty"
        },
        isString: {
            errorMessage: "parentPhoneString"
        }
    },
    parentName: {
        optional: true,
        isLength: {
            options: {
                min: 5,
                max: 32
            },
            errorMessage: "parentNameLength"
        },
        notEmpty: {
            errorMessage: "parentNameEmpty"
        },
        isString: {
            errorMessage: "parentNameString"
        }
    }
};