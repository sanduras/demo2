import { useEffect, useState, useMemo } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import axios from "axios";

const Team = () => {
  const [users, setUsers] = useState([]);
  const [pages, setPages] = useState(1);
  const [pagex, setPagex] = useState(0);

  useEffect(() => {
    const getUser = async () => {
      try {
        const url = "https://reqres.in/api/users/?page=";
        const response = await axios.get(`${url}${pagex}`);
        setUsers(response.data.data);
        setPages(response.data.total_pages);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
    console.log("page are", pagex);
  }, [pagex, setPagex]);

  const handleClick = (event, page) => {
    setPagex(page);
  };
  return (
    <section className="container mx-auto w-full xl:max-w-[1260px] lg:max-w-[1024px] px-8">
   
      <div className="p-1 flex flex-wrap items-center justify-center">
        {users.length &&
          users.map((user) => {
            return (
              <Card
                sx={{ maxWidth: 345 }}
                key={user.id}
                className="flex-shrink-0 m-6 relative overflow-hidden bg-orange-500 !rounded-xl max-w-xs shadow-lg"
              >
                <CardMedia
                  sx={{ height: 140 }}
                  image={user.avatar}
                  title="UserImage"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {user.first_name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {user.email}
                  </Typography>
                </CardContent>
              </Card>
            );
          })}
      </div>
      <Stack spacing={2}>
        <Pagination count={pages} shape="rounded" onChange={handleClick} />
      </Stack>
    </section>
  );
};

export default Team;
