"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { TextField, InputLabel, FormControl, Select } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { Container } from "@mui/material";
import InputField from "../Input/InputField";
import BirtdayField from "../Input/BirtdayField";
import GenderField from "../Input/GenderField";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import TagSelect from "../Input/TagSelect";

export default function MenuAppBar() {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const simpleStyles = {
    content: {
      height: "100vh",
    },
  };

  return (
    <Box sx={{ ...{ flexGrow: 1 }, ...simpleStyles.content }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            JOYFIT会員管理
          </Typography>
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
      <Container>
        <div>
          <Box
            sx={{
              maxWidth: 1152,
              backgroundColor: "#1976D2",
              padding: "10px",
              marginTop: "30px",
            }}
          >
            <Typography variant="h6" sx={{ color: "white" }}>
              個人情報
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box
              sx={{
                width: "570px",
                backgroundColor: "rgb(247,254,255)",
                padding: "20px",
              }}
            >
              <Avatar
                sx={{ width: 80, height: 80, marginLeft: "30px" }}
                alt="Remy Sharp"
                src="data:image/jpeg;base64,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"
              />
              <Button variant="contained" sx={{ marginTop: "10px" }}>
                写真アップロード
              </Button>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: "10px",
                }}
              >
                <FormControl variant="standard">
                  <InputLabel
                    shrink
                    htmlFor="bootstrap-input"
                    sx={{ fontWeight: "bold" }}
                  >
                    トレーナーID
                  </InputLabel>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    size="small"
                    margin="normal"
                    placeholder="1"
                    disabled={true}
                    sx={{ backgroundColor: "whitesmoke", width: "150px" }}
                  />
                </FormControl>
                <FormControl variant="standard">
                  <InputLabel
                    shrink
                    htmlFor="bootstrap-input"
                    sx={{ fontWeight: "bold" }}
                  >
                    ユーザー登録情報ステータス
                  </InputLabel>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    size="small"
                    margin="normal"
                    placeholder="未確定"
                    disabled={true}
                    sx={{ backgroundColor: "whitesmoke" }}
                  />
                </FormControl>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: "10px",
                }}
              >
                <FormControl variant="standard">
                  <InputLabel
                    shrink
                    htmlFor="bootstrap-input"
                    sx={{ fontWeight: "bold" }}
                  >
                    名字
                  </InputLabel>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    size="small"
                    margin="normal"
                    defaultValue="山田"
                    sx={{ backgroundColor: "#FFFFFF" }}
                  />
                </FormControl>
                <FormControl variant="standard">
                  <InputLabel
                    shrink
                    htmlFor="bootstrap-input"
                    sx={{ fontWeight: "bold" }}
                  >
                    名前
                  </InputLabel>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    size="small"
                    margin="normal"
                    defaultValue="花子"
                    sx={{ backgroundColor: "#FFFFFF" }}
                  />
                </FormControl>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: "10px",
                }}
              >
                <FormControl variant="standard">
                  <InputLabel
                    shrink
                    htmlFor="bootstrap-input"
                    sx={{ fontWeight: "bold" }}
                  >
                    名字カタカナ
                  </InputLabel>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    size="small"
                    margin="normal"
                    defaultValue="ヤマダ"
                    sx={{ backgroundColor: "#FFFFFF" }}
                  />
                </FormControl>
                <FormControl variant="standard">
                  <InputLabel
                    shrink
                    htmlFor="bootstrap-input"
                    sx={{ fontWeight: "bold" }}
                  >
                    名前カタカナ
                  </InputLabel>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    size="small"
                    margin="normal"
                    defaultValue="ハナコ"
                    sx={{ backgroundColor: "#FFFFFF" }}
                  />
                </FormControl>
              </Box>
              <BirtdayField />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: "10px",
                }}
              >
                <GenderField />
                <FormControl variant="standard">
                  <InputLabel
                    shrink
                    htmlFor="bootstrap-input"
                    sx={{ fontWeight: "bold" }}
                  >
                    携帯電話番号
                  </InputLabel>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    size="small"
                    margin="normal"
                    defaultValue="032224131"
                    sx={{ backgroundColor: "#FFFFFF" }}
                  />
                </FormControl>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: "10px",
                }}
              >
                <FormControl variant="standard">
                  <InputLabel
                    shrink
                    htmlFor="bootstrap-input"
                    sx={{ fontWeight: "bold" }}
                  >
                    電話番号認証コード
                  </InputLabel>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    size="small"
                    margin="normal"
                    placeholder="241421"
                    disabled={true}
                    sx={{ backgroundColor: "whitesmoke", width: "130px" }}
                  />
                </FormControl>
                <Button
                  variant="contained"
                  sx={{ marginRight: "45px", marginTop: "8px", height: "40px" }}
                >
                  コードを再発行
                </Button>
                <FormControl variant="standard">
                  <InputLabel
                    shrink
                    htmlFor="bootstrap-input"
                    sx={{ fontWeight: "bold" }}
                  >
                    電話番号認証コード有効期限
                  </InputLabel>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    size="small"
                    margin="normal"
                    placeholder="60秒"
                    disabled={true}
                    sx={{ backgroundColor: "whitesmoke" }}
                  />
                </FormControl>
              </Box>
            </Box>
            <Box
              sx={{
                width: "570px",
                backgroundColor: "rgb(247,254,255)",
                padding: "20px",
              }}
            >
              <FormControl variant="standard" sx={{ width: "530px" }}>
                <InputLabel
                  shrink
                  htmlFor="bootstrap-input"
                  sx={{ fontWeight: "bold" }}
                >
                  メールアドレス
                </InputLabel>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  size="small"
                  margin="normal"
                  defaultValue="wonhee@rikkeisoft.com"
                  sx={{ backgroundColor: "#FFFFFF" }}
                />
              </FormControl>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <FormControl variant="standard">
                  <InputLabel
                    shrink
                    htmlFor="bootstrap-input"
                    sx={{ fontWeight: "bold" }}
                  >
                    郵便番号
                  </InputLabel>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    size="small"
                    margin="normal"
                    defaultValue="460-0017"
                    sx={{ backgroundColor: "#FFFFFF" }}
                  />
                </FormControl>
                <FormControl variant="standard">
                  <InputLabel
                    shrink
                    htmlFor="bootstrap-input"
                    sx={{ fontWeight: "bold" }}
                  >
                    都道府県
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    sx={{
                      border: "1px solid #ced4da",
                      borderRadius: "3px",
                      width: "210px",
                      height: "40px",
                      marginBottom: "8px",
                      padding: "5px",
                      backgroundColor: "#FFFFFF",
                    }}
                    defaultValue="愛知県"
                  >
                    <MenuItem value={1}>愛知県</MenuItem>
                    <MenuItem value={2}>愛知県</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <FormControl variant="standard" sx={{ width: "530px" }}>
                <InputLabel
                  shrink
                  htmlFor="bootstrap-input"
                  sx={{ fontWeight: "bold" }}
                >
                  市区町村
                </InputLabel>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  size="small"
                  margin="normal"
                  defaultValue="名古屋市中区新栄2丁目"
                  sx={{ backgroundColor: "#FFFFFF" }}
                />
              </FormControl>
              <FormControl variant="standard" sx={{ width: "530px" }}>
                <InputLabel
                  shrink
                  htmlFor="bootstrap-input"
                  sx={{ fontWeight: "bold" }}
                >
                  番地・号
                </InputLabel>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  size="small"
                  margin="normal"
                  defaultValue="41-7"
                  sx={{ backgroundColor: "#FFFFFF" }}
                />
              </FormControl>
              <FormControl variant="standard" sx={{ width: "530px" }}>
                <InputLabel
                  shrink
                  htmlFor="bootstrap-input"
                  sx={{ fontWeight: "bold" }}
                >
                  建物名・部屋番号
                </InputLabel>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  size="small"
                  margin="normal"
                  defaultValue="マンションセブンエス２B"
                  sx={{ backgroundColor: "#FFFFFF" }}
                />
              </FormControl>
              <FormControl variant="standard" sx={{ width: "530px" }}>
                <InputLabel
                  shrink
                  htmlFor="bootstrap-input"
                  sx={{ fontWeight: "bold" }}
                >
                  ログイン元
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  sx={{
                    border: "1px solid #ced4da",
                    borderRadius: "3px",
                    width: "210px",
                    height: "40px",
                    marginBottom: "8px",
                    padding: "5px",
                    backgroundColor: "#FFFFFF",
                  }}
                  defaultValue="Google"
                >
                  <MenuItem value={1}>Google</MenuItem>
                  <MenuItem value={2}>Microsoft</MenuItem>
                </Select>
              </FormControl>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <FormControl variant="standard">
                  <InputLabel
                    shrink
                    htmlFor="bootstrap-input"
                    sx={{ fontWeight: "bold" }}
                  >
                    ソーシャルID
                  </InputLabel>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    size="small"
                    margin="normal"
                    defaultValue="02381239214"
                    sx={{ backgroundColor: "#FFFFFF" }}
                  />
                </FormControl>
                <FormControl variant="standard">
                  <InputLabel
                    shrink
                    htmlFor="bootstrap-input"
                    sx={{ fontWeight: "bold" }}
                  >
                    岡本ID
                  </InputLabel>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    size="small"
                    margin="normal"
                    defaultValue="18231232"
                    sx={{ backgroundColor: "#FFFFFF" }}
                  />
                </FormControl>
              </Box>
            </Box>
          </Box>
        </div>
        <div>
          <Box
            sx={{
              maxWidth: 1152,
              backgroundColor: "#1976D2",
              padding: "10px",
              marginTop: "20px",
            }}
          >
            <Typography variant="h6" sx={{ color: "white" }}>
              トレーナー情報
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box
              sx={{
                width: "570px",
                backgroundColor: "rgb(247,254,255)",
                padding: "20px",
              }}
            >
              <InputLabel
                shrink
                htmlFor="bootstrap-input"
                sx={{ fontWeight: "bold" }}
              >
                編集可能ブランド
              </InputLabel>
              <TagSelect />
              <InputLabel
                shrink
                htmlFor="bootstrap-input"
                sx={{ fontWeight: "bold", marginTop: "10px" }}
              >
                編集可能店舗
              </InputLabel>
              <TagSelect />
            </Box>
            <Box
              sx={{
                width: "570px",
                backgroundColor: "rgb(247,254,255)",
                padding: "20px",
              }}
            >
              <InputLabel
                shrink
                htmlFor="bootstrap-input"
                sx={{ fontWeight: "bold" }}
              >
                備考
              </InputLabel>
              <FormControl variant="standard">
                <TextareaAutosize
                  aria-label="minimum height"
                  minRows={5}
                  placeholder="コメント"
                  style={{ width: "530px", padding: "10px" }}
                />
              </FormControl>
            </Box>
          </Box>
        </div>
        <div>
          <Box
            sx={{
              width: "1152px",
              backgroundColor: "rgb(247,254,255)",
              padding: "20px",
              marginTop: "20px",
              display: "flex",
              justifyContent:"flex-end"
            }}
          >
            <Button
              variant="contained"
              sx={{ marginRight: "45px", marginTop: "8px", height: "40px", width:"100px", fontWeight:"bold" }}
            >
              登録
            </Button>
            <Button
              variant="outlined"
              sx={{ marginRight: "45px", marginTop: "8px", height: "40px", width:"120px", fontWeight:"bold" }}
            >
              キャンセル
            </Button>
          </Box>
        </div>
      </Container>
    </Box>
  );
}
