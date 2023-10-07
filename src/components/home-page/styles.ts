const afterHead = {
  content: '""',
  position: "absolute",
  display: "block",
  height: 920,
  borderRadius: "50%",
  background: "#FFF",
};

const borderDashed = "1px dashed rgba(145, 158, 171, 0.24)";

export const styles = {
  afterHeader: {
    "&::after": {
      xs: {
        ...afterHead,
        bottom: -880,
        width: "250%",
      },
      md: {
        ...afterHead,
        bottom: -830,
        width: "170%",
      },
    },
  },
  title: {
    fontSize: "2rem",
    fontWeight: 700,
  },
  highlighLabel: {
    fontSize: "1rem",
    color: "#7C4DFF",
    fontWeight: 600,
  },
  linksContent: {
    padding: "1.5rem",
    border: borderDashed,
    borderRadius: "1rem",
  },
  linksTitle: {
    fontSize: 20,
    fontWeight: 700,
    width: "100%",
    whiteSpace: { md: "nowrap" },
    overflow: { md: "hidden" },
    textOverflow: { md: "ellipsis" },
  },
  helpButton: {
    borderColor: "#448AFF",
    fontSize: 15,
    fontWeight: 700,
    color: "#448AFF",
    marginTop: 3,
    textTransform: "none",
  },
  moreContent: {
    padding: "1.5rem 1rem",
    border: borderDashed,
    borderRadius: "1rem",
    "&::after": {
      content: '""',
      position: "absolute",
      width: "1px",
      height: "100%",
      top: 0,
      right: "50%",
      borderRight: borderDashed,
    },
  },
  moreButton: {
    borderColor: "#7C4DFF",
    fontSize: 15,
    fontWeight: 700,
    color: "#7C4DFF",
    marginTop: 3,
    textTransform: "none",
  },
};
