import AppsIcon from '@mui/icons-material/Apps';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { Button, SvgIcon, Typography } from '@mui/material';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import { ReactComponent as TrelloIcon } from '~/assets/trello.svg';
import ModeSelect from '~/components/ModeSelect';
import Profiles from './Menus/Profiles';
import Recent from './Menus/Recent';
import Starred from './Menus/Starred';
import Templates from './Menus/Templates';
import Workspaces from './Menus/Workspaces';

function AppBar() {
    return (
        <Box px={2} sx={{
            width: '100%',
            height: (theme) => theme.trello.appBarHeight,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
        }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <AppsIcon sx={{ color: 'primary.main' }} />
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <SvgIcon component={TrelloIcon} inheriViewBox fontSize="small" sx={{ color: 'primary.main' }} />
                    <Typography variant='span' sx={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'primary.main' }}>Trello</Typography>
                </Box>
                <Workspaces />
                <Recent />
                <Starred />
                <Templates />

                <Button variant='outlined'>Create</Button>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <TextField id="outlined-search" label="Search..." type="search" size="small" />
                <ModeSelect />
                <Tooltip title="Notification">
                    <Badge color="secondary" variant="dot" sx={{ cursor: 'pointer' }}>
                        <NotificationsNoneIcon />
                    </Badge>
                </Tooltip>
                <Tooltip title="Help">
                    <HelpOutlineIcon />
                </Tooltip>

                <Profiles />
            </Box>
        </Box>
    )
}

export default AppBar
