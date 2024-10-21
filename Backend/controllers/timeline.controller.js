
export const createTimeline = async (req, res) => {
  try {
  
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message || "Internal server error",
      success: false,
      error,
    });
  }
};

export const getalltimeline = async (req, res) => {
  try {
  
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message || "Internal server error",
      success: false,
      error,
    });
  }
};

export const deletetimeline = async (req, res) => {
  try {
  
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message || "Internal server error",
      success: false,
      error,
    });
  }
};
