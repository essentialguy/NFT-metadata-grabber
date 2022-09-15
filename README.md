# NFT-metadata-grabber



## Getting Started 

a tool to grab nft metadata by passing ipfs cid of metadata\
Max json to Download is 1000 per command\
see the example below

### Installing

```
npm install
```
to run the grabber\
the command take 2 args to run\
startindex as first arg\
endindex as second arg\
 
```
npm run grab 
```

### Example

you need to pass startindex and endindex\
Put CID in .env\
Max js to Download is 1000 per command\
if you want to download 10000 json then you need to do it in 10 batch\
1 1000 then 1000 2000 then 2000 3000 and so on to 9000 9999\
tool doesn't accept 10000 as endindex so you need to pass 9999\

startindex = 1 \
endindex = 1000 \
CID = Qmd5DbGu4q6hMziNBqwyHEYZmBUsG4mTTR2DPypTu6TGvH

```
npm run grab 1 1000
```
