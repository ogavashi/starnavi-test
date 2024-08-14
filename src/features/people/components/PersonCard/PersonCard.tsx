import { ROUTES } from "@features/navigation";
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { IPerson } from "@types";
import { generatePath, Link } from "react-router-dom";

interface PersonCardProps {
  person: IPerson;
}

export const PersonCard = ({ person }: PersonCardProps) => {
  return (
    <Card sx={{ maxWidth: 400 }} variant="outlined">
      <CardMedia
        component="img"
        sx={{ height: 550, width: 400 }}
        image={`https://starwars-visualguide.com/assets/img/characters/${person.id}.jpg`}
        alt={person.name}
        title={person.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {person.name}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Birth: {person.birth_year}
        </Typography>
      </CardContent>
      <CardActions>
        <Button component={Link} to={generatePath(ROUTES.PERSON, { id: person.id })}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};
