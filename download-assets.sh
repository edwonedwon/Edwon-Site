#!/usr/bin/env bash
# ============================================================
# EDWON.TV — download-assets.sh
# Downloads all images, GIFs, and icons from the Webflow CDN
# to your local assets folder.
#
# Usage:
#   chmod +x download-assets.sh
#   ./download-assets.sh
# ============================================================

set -e
CDN="https://cdn.prod.website-files.com"
UPLOADS="https://uploads-ssl.webflow.com"

echo "Creating asset directories..."
mkdir -p assets/projects assets/icons assets/archive

# --- Logo & Branding ---
echo "Downloading logo..."
curl -sL "${UPLOADS}/5ff174245233458a595eefe3/5ff17fce0eebbc2f3bf2b284_edwon%20logo%203.1%20white.svg" \
  -o "assets/logo.svg"

# --- Edwon GIF (about page) ---
echo "Downloading edwon GIF..."
curl -sL "${UPLOADS}/5ff174245233458a595eefe3/5ff41fad4868b68dcf2eb15e_edwon%20gif.gif" \
  -o "assets/edwon-gif.gif"

# --- Waving Waba (footer) ---
echo "Downloading waving waba..."
curl -sL "${CDN}/5ff174245233458a595eefe3/5ff1b5c4518c518138e17687_waving-waba-cropped-alpha.gif" \
  -o "assets/waving-waba.gif"

# --- Social Icons ---
echo "Downloading social icons..."
curl -sL "${CDN}/5ff174245233458a595eefe3/62a2ee1abc00de36074cce08_2190981_circle_email_inbox_letter_mail_icon.png" \
  -o "assets/icons/email.png"

curl -sL "${CDN}/5ff174245233458a595eefe3/62a0c12c6ba76421a3ed136b_youtube%20red%201.png" \
  -o "assets/icons/youtube.png"

curl -sL "${CDN}/5ff174245233458a595eefe3/62a0c12870e53309ab71ab94_twitter%20blue%201.png" \
  -o "assets/icons/twitter.png"

curl -sL "${CDN}/5ff174245233458a595eefe3/62a0c2c6b8a00c108033b373_insta%20blue%201.png" \
  -o "assets/icons/instagram.png"

curl -sL "${CDN}/5ff174245233458a595eefe3/62a16b975ad0e29116a5ec87_snap%20yellow%201.png" \
  -o "assets/icons/snapchat.png"

# --- Portfolio Thumbnails ---
echo "Downloading portfolio thumbnails..."

curl -sL "${CDN}/5ff177945a92b0bf927b28ce/5ff1a1d7d5a4c36e74e7272f_Washington%20Lottery.gif" \
  -o "assets/projects/washington-lottery.gif"

curl -sL "${CDN}/5ff177945a92b0bf927b28ce/62a1e61d41be5d76d3cf0f4f_Washinton%27s%20Lottery%20-%20Concept%20Art.jpg" \
  -o "assets/projects/washington-lottery-concept.jpg"

curl -sL "${CDN}/5ff177945a92b0bf927b28ce/62a09f26cfc8aa82eb4a5ed5_waba%20thumb%202%20small.jpg" \
  -o "assets/projects/waba-thumb.jpg"

curl -sL "${CDN}/5ff177945a92b0bf927b28ce/62a1f28d0fcd5ba06a2b4297_3D%20pet%201%20small.gif" \
  -o "assets/projects/waba-3d-pet.gif"

curl -sL "${CDN}/5ff177945a92b0bf927b28ce/5ff1a1a6559a427fb5aa0096_VR%20Infinite%20Gesture%20Thumb.gif" \
  -o "assets/projects/vr-infinite-gesture.gif"

curl -sL "${CDN}/5ff177945a92b0bf927b28ce/62a09e1f8756b76382bc5858_wuppets%20thumb%202%20small.jpg" \
  -o "assets/projects/wuppets-thumb.jpg"

curl -sL "${CDN}/5ff177945a92b0bf927b28ce/5ff19f7cbcc643ab29e10a5f_Collider%20Thumb.gif" \
  -o "assets/projects/collider-trailer.gif"

curl -sL "${CDN}/5ff177945a92b0bf927b28ce/62a2dd498bea6e02ca7f4745_moic%20thumb%203.jpg" \
  -o "assets/projects/moic-thumb.jpg"

curl -sL "${CDN}/5ff177945a92b0bf927b28ce/62a2cf390b7cb4589cf58ec7_Snapchat%20Cat%20Lens%20Thumb%201.gif" \
  -o "assets/projects/snapchat-cat-lens.gif"

curl -sL "${CDN}/5ff177945a92b0bf927b28ce/62a5b5df6a31c82b2d0edde3_wuboz%20gif%202%20yellow%20rounded.gif" \
  -o "assets/projects/wuboz.gif"

curl -sL "${CDN}/5ff177945a92b0bf927b28ce/5ff1a1655233455ce75f4158_jewel%2Bgif%2B1.gif" \
  -o "assets/projects/disneyworld.gif"

curl -sL "${CDN}/5ff177945a92b0bf927b28ce/5ff1a1734ac6783ad962f6b2_Salaryman-Thumb-1-color-adjusted.gif" \
  -o "assets/projects/salaryman.gif"

curl -sL "${CDN}/5ff177945a92b0bf927b28ce/5ff1a1edfdd5f782f11aea71_wave-master-thumb.gif" \
  -o "assets/projects/wave-master.gif"

curl -sL "${CDN}/5ff177945a92b0bf927b28ce/5ff1a1169c74e60f3f6cb0a9_ff5-small-restrictive.gif" \
  -o "assets/projects/ff5.gif"

curl -sL "${CDN}/5ff177945a92b0bf927b28ce/5ff1a1378082a2523a6d58e9_Microsoft%20College%20Thumb.gif" \
  -o "assets/projects/microsoft-college.gif"

curl -sL "${CDN}/5ff177945a92b0bf927b28ce/62a2f516fd5cc487a9898eb6_Parade%20Master%20Thumb%20v1.gif" \
  -o "assets/projects/parade-master.gif"

curl -sL "${CDN}/5ff177945a92b0bf927b28ce/62a201e5022c88220bf17fdb_outlook%20thumb%201%20small%20.jpg" \
  -o "assets/projects/outlook-thumb.jpg"

# --- Archive Thumbnails ---
echo "Downloading archive thumbnails..."

curl -sL "${CDN}/5ff177945a92b0bf927b28ce/601bfd95c4c179db984c6a77_Screen%20Shot%202021-02-04%20at%2010.58.22%20PM.png" \
  -o "assets/archive/curse-of-the-pebble.png"

curl -sL "${CDN}/5ff177945a92b0bf927b28ce/601bfc03d330d784a9c387b6_Screen%20Shot%202021-02-04%20at%2010.51.40%20PM.png" \
  -o "assets/archive/caori-needs-a-photo.png"

curl -sL "${CDN}/5ff177945a92b0bf927b28ce/601bfc5453cb4f3e10042ca0_Screen%20Shot%202021-02-04%20at%2010.52.50%20PM.png" \
  -o "assets/archive/kawaii-heart-attack.png"

curl -sL "${CDN}/5ff177945a92b0bf927b28ce/601bfc953e6c39935673dc2b_Screen%20Shot%202021-02-04%20at%2010.54.05%20PM.png" \
  -o "assets/archive/my-battle-costume.png"

curl -sL "${CDN}/5ff177945a92b0bf927b28ce/601bfd648645eb91be241c8d_Screen%20Shot%202021-02-04%20at%2010.57.39%20PM.png" \
  -o "assets/archive/mei-wei-siiaisuna.png"

curl -sL "${CDN}/5ff177945a92b0bf927b28ce/601bfd38d330d76cebc38aee_Screen%20Shot%202021-02-04%20at%2010.57.02%20PM.png" \
  -o "assets/archive/riding-the-bus-is-cool.png"

curl -sL "${CDN}/5ff177945a92b0bf927b28ce/601bfdb51ec23de5bea740c3_Screen%20Shot%202021-02-04%20at%2010.59.03%20PM.png" \
  -o "assets/archive/cheapskate-mickey.png"

curl -sL "${CDN}/5ff177945a92b0bf927b28ce/601bfe2e1ec23d8328a74235_Screen%20Shot%202021-02-04%20at%2011.01.10%20PM.png" \
  -o "assets/archive/stretch-limbo.png"

curl -sL "${CDN}/5ff177945a92b0bf927b28ce/601c027eaf12a97511c916b7_Screen%20Shot%202021-02-04%20at%2011.19.15%20PM.png" \
  -o "assets/archive/id-know-you-anywhere.png"

curl -sL "${CDN}/5ff177945a92b0bf927b28ce/601bfe9d277cc68350c2e1fc_Screen%20Shot%202021-02-04%20at%2011.03.02%20PM.png" \
  -o "assets/archive/push-button-for-death.png"

curl -sL "${CDN}/5ff177945a92b0bf927b28ce/601bfed1082f0295f3d82fab_Screen%20Shot%202021-02-04%20at%2011.03.53%20PM.png" \
  -o "assets/archive/no-seatbelt-no-mickey.png"

curl -sL "${CDN}/5ff177945a92b0bf927b28ce/601bfee51ec23dd7c0a742d4_Screen%20Shot%202021-02-04%20at%2011.04.12%20PM.png" \
  -o "assets/archive/geotic.png"

curl -sL "${CDN}/5ff177945a92b0bf927b28ce/601bff21d330d70199c394ee_Screen%20Shot%202021-02-04%20at%2011.05.11%20PM.png" \
  -o "assets/archive/my-first-time-at-ikea.png"

curl -sL "${CDN}/5ff177945a92b0bf927b28ce/601bff0f396a376a1f55108c_Screen%20Shot%202021-02-04%20at%2011.04.54%20PM.png" \
  -o "assets/archive/vine-reference.png"

curl -sL "${CDN}/5ff177945a92b0bf927b28ce/601bff7ccc5b692aeb5e3c6c_Screen%20Shot%202021-02-04%20at%2011.06.43%20PM.png" \
  -o "assets/archive/spinning-portrait-brendon-chung.png"

curl -sL "${CDN}/5ff177945a92b0bf927b28ce/601bff53308cdae2f336c0f2_Screen%20Shot%202021-02-04%20at%2011.06.02%20PM.png" \
  -o "assets/archive/my-modeling-career.png"

curl -sL "${CDN}/5ff177945a92b0bf927b28ce/601bffb8c81f1ee6a0a63155_Screen%20Shot%202021-02-04%20at%2011.07.40%20PM.png" \
  -o "assets/archive/float.png"

curl -sL "${CDN}/5ff177945a92b0bf927b28ce/601bffdbcc5b6910b15e3d06_Screen%20Shot%202021-02-04%20at%2011.08.10%20PM.png" \
  -o "assets/archive/vr-dev-life.png"

curl -sL "${CDN}/5ff177945a92b0bf927b28ce/601bfff8d85b2b64e8e895d0_Screen%20Shot%202021-02-04%20at%2011.08.40%20PM.png" \
  -o "assets/archive/california-christmas.png"

curl -sL "${CDN}/5ff177945a92b0bf927b28ce/601c004430b50cca203088fc_Screen%20Shot%202021-02-04%20at%2011.10.04%20PM.png" \
  -o "assets/archive/parrot-must-die.png"

curl -sL "${CDN}/5ff177945a92b0bf927b28ce/601c005e4e13cb49be3f7b21_Screen%20Shot%202021-02-04%20at%2011.10.22%20PM.png" \
  -o "assets/archive/butterfly-moment.png"

curl -sL "${CDN}/5ff177945a92b0bf927b28ce/601c008f277cc622a0c2e906_Screen%20Shot%202021-02-04%20at%2011.11.17%20PM.png" \
  -o "assets/archive/love-at-first-sight.png"

curl -sL "${CDN}/5ff177945a92b0bf927b28ce/601c00b1e4013054729650f1_Screen%20Shot%202021-02-04%20at%2011.11.42%20PM.png" \
  -o "assets/archive/cable-complication.png"

curl -sL "${CDN}/5ff177945a92b0bf927b28ce/601c00da6298bec8fdad121c_Screen%20Shot%202021-02-04%20at%2011.12.29%20PM.png" \
  -o "assets/archive/kalin-kung-fu.png"

curl -sL "${CDN}/5ff177945a92b0bf927b28ce/601c011d7e581d71e377e5f9_Screen%20Shot%202021-02-04%20at%2011.13.31%20PM.png" \
  -o "assets/archive/sweat-pet.png"

curl -sL "${CDN}/5ff177945a92b0bf927b28ce/601c013e277cc63805c2eac8_Screen%20Shot%202021-02-04%20at%2011.14.13%20PM.png" \
  -o "assets/archive/everyday-ninja-phone-get.png"

curl -sL "${CDN}/5ff177945a92b0bf927b28ce/601bff9d3f11499861dda90f_Screen%20Shot%202021-02-04%20at%2011.07.16%20PM.png" \
  -o "assets/archive/encounter-bicycle-goblin.png"

curl -sL "${CDN}/5ff177945a92b0bf927b28ce/601bfe74de78a963de32df61_Screen%20Shot%202021-02-04%20at%2011.02.20%20PM.png" \
  -o "assets/archive/when-you-think-its-funny.png"

echo ""
echo "✓ All assets downloaded successfully!"
echo ""
echo "Next steps:"
echo "  1. Add a favicon.svg to assets/ (or copy your logo there)"
echo "  2. Add YouTube URLs to data/archive.json for each archive item"
echo "  3. Add more media (images, YouTube IDs) to data/projects.json"
echo "  4. Upload the entire folder to Hostinger via FTP or File Manager"
