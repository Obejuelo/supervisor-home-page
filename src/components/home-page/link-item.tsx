import { Box, Button, Typography } from "@mui/material";
import { ArrowRightIcon } from "../icons/arrow-right-icon";

type LinkItemProps = {
  img: string;
  title: string;
  label: string;
  link: string;
};

export const LinkItem: React.FC<LinkItemProps> = (props) => {
  const navigateTo = () => {
    //TODO: Add navigation function ej...
    //history.push(props.link);
  };

  return (
    <Box
      display="flex"
      flexDirection={{ xs: "column", md: "row" }}
      justifyContent="space-between"
      borderTop="1px dashed rgba(145, 158, 171, 0.24)"
      alignItems={{ md: "center" }}
      py={2.5}
    >
      <Box
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        alignItems={{ md: "center" }}
      >
        <img src={props.img} alt="link-img" width={80} />
        <Box width={{ md: 150, lg: 190 }} ml={{ md: 2 }}>
          <Typography variant="caption" component="p" sx={{ color: "#637381" }}>
            {props.label}
          </Typography>
          <Typography
            variant="caption"
            component="p"
            sx={{ fontWeight: 600, color: "#212B36" }}
          >
            {props.title}
          </Typography>
        </Box>
      </Box>
      <Box display="flex" alignItems="center">
        <Button
          endIcon={<ArrowRightIcon />}
          onClick={navigateTo}
          sx={{
            fontSize: 14,
            fontWeight: 700,
            color: "#448AFF",
            textTransform: "none",
          }}
        >
          Ver artículo
        </Button>
      </Box>
    </Box>
  );
};
