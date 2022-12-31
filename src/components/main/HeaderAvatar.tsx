import React from 'react';
import Box from '@mui/material/Box';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { useTranslate } from 'components/languageContext/languageContext';

const data = ['Profile', 'Settings', 'Log out'];

export default function HeaderAvatar() {
  const [open, setOpen] = React.useState(false);
  const profileButton = useTranslate('headerAvatarButtons.profile');
  const settingsButton = useTranslate('headerAvatarButtons.settings');
  const logOutButton = useTranslate('headerAvatarButtons.logOut');
  const user = useTranslate('headerAvatarButtons.user');
  const buttons = [profileButton, settingsButton, logOutButton];
  const body = document.querySelector('body') as HTMLBodyElement;
  const HandleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent> | MouseEvent) => {
    if (e.target instanceof HTMLElement) {
      const pageClick = !e.target.closest('.MuiPaper-root');
      pageClick ? setOpen(false) : null;
    }
  };

  React.useEffect(() => {
    return body.addEventListener('click', (e) => HandleClick(e));
  }, []);

  return (
    <Box
      sx={{
        position: 'absolute',
        right: 16,
        top: 9.5,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          border: 'solid 0',
          borderRadius: 6,
        }}
      >
        <ThemeProvider
          theme={createTheme({
            components: {
              MuiListItemButton: {
                defaultProps: {
                  disableTouchRipple: true,
                },
              },
            },
            palette: {
              mode: 'dark',
              primary: { main: 'rgb(102, 157, 246)' },
            },
          })}
        >
          <Paper
            elevation={0}
            sx={{
              width: 160,
              border: 'solid 0',
              borderRadius: 6,
            }}
          >
            <Box
              sx={{
                bgcolor: open ? '#3d3d3d' : null,
                pb: open ? 2 : 0,
                border: 'solid 0',
                borderRadius: 6,
              }}
            >
              <ListItemButton
                alignItems="flex-start"
                onClick={() => setOpen(!open)}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'start',
                  gap: '.5rem',
                  padding: '10px',
                }}
              >
                <Box>
                  <FaUserCircle style={{ width: '1.5em', height: '1.5em' }} />
                </Box>
                <ListItemText
                  primary={user.length > 12 ? user.slice(0, 10) + '...' : user}
                  primaryTypographyProps={{
                    fontSize: 15,
                    fontWeight: 'medium',
                    minWidth: 120,
                  }}
                  secondaryTypographyProps={{
                    noWrap: true,
                    fontSize: 12,
                    lineHeight: '16px',
                    color: open ? 'rgba(0,0,0,0)' : 'rgba(255,255,255,0.5)',
                  }}
                  sx={{ my: 0 }}
                />
              </ListItemButton>
              {open ? <Divider /> : null}
              {open &&
                data.map((item, index) => (
                  <ListItemButton
                    key={item}
                    sx={{
                      py: 0,
                      minHeight: 32,
                      color: 'rgb(189, 199, 199)',
                      '&:hover': { color: 'white' },
                    }}
                    onClick={() => setOpen(!open)}
                  >
                    {item != 'Log out' ? (
                      <Link to={item} data-testid={item} style={{ textDecoration: 'none' }}>
                        <ListItemText
                          primary={buttons[index]}
                          primaryTypographyProps={{
                            fontSize: 14,
                            fontWeight: 'medium',
                          }}
                          sx={{
                            color: 'rgb(189, 199, 199)',
                            '&:hover': { color: 'rgb(255, 255, 255)' },
                          }}
                        />
                      </Link>
                    ) : (
                      <ListItemText
                        primary={buttons[index]}
                        primaryTypographyProps={{
                          fontSize: 14,
                          fontWeight: 'medium',
                        }}
                      />
                    )}
                  </ListItemButton>
                ))}
            </Box>
          </Paper>
        </ThemeProvider>
      </Box>
    </Box>
  );
}
