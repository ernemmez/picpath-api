const test = async (req: any, res: any, next: any) => {
  try {
    res.json({
      message: "succesfuly!",
    });
  } catch (err: any) {
    res.status(400).send(err.message);
  }
};

export default test;
