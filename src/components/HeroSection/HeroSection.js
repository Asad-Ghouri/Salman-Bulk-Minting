import React from "react";
import "./HeroSection.css";

import RightNft from "../../images/rightNft.jpeg";

function HeroSection() {
  return (
    <>
    {/* <div className="heropage">
    <div className="HeroSection">
      <div className="d-flex">
        <div className="textpart">
          sKyfLYpiE iS a oNe oF, 8,888 nFt dEsiGneD bY aDVenTuRe9Labs fOr thE
          cOmmUniTy sO eNjOY iT. thE uTiLiTy iS tO cReaTe tOgEtheRnEsS bEtWeEn
          zE aDveNtuRe coMMuNiTy aNd nFt cOmmUniTy aT a whOLe, wE hOpE thAt oNe
          daY mOre peOpLe cAn eNjOY mOrE aDvEnTuRes eSpeCiALLy iN tHe skYdiVinG
          fiELd wiTh uS anD wiTh thE cOMmuniTy. wE woULd wAnT tO pOTenTiaLLy
          meRch bOth zE aDvenTurE coMMuniTy aNd nFt cOmmuniTy aND jUst hAvE soMe
          baRbeQue aND aDvenTureS fOR zE hoLDeRs, pErhaPs iN nEar fUtuRe. eAcH
          sKyfLYPiE iS a uNiQuE dEGen oF zOmBiE & hUmAn bAse cHaRaCteRs wiTh
          moRe tHaN 60 uNiQuE trAiTs aNd iT iS LiVin' iN zE eThereUm bLoCkchAin
          fOReVer. bE uNiqUe daWgiEs, mOre AdVenTuReS, mOre sKydiViNG!!!
        </div>
        <div className="imagepart">
          <img src={RightNft} alt="" />
        </div>
      </div>
    </div>
    </div>
     */}
       <div className="wrapper">
        <div className="image">
          <a href="javascript:void(0)">
            <img src={RightNft} />
          </a>
        </div>
        <div className="content align-center">
          <div className>
            {/* <h3 className="title align-center">
              Get Your Top Collections Here
            </h3> */}
            <p className="subText">
            sKyfLYpiE iS a oNe oF, 8,888 nFt dEsiGneD bY aDVenTuRe9Labs fOr thE
          cOmmUniTy sO eNjOY iT. thE uTiLiTy iS tO cReaTe tOgEtheRnEsS bEtWeEn
          zE aDveNtuRe coMMuNiTy aNd nFt cOmmUniTy aT a whOLe, wE hOpE thAt oNe
          daY mOre peOpLe cAn eNjOY mOrE aDvEnTuRes eSpeCiALLy iN tHe skYdiVinG
          fiELd wiTh uS anD wiTh thE cOMmuniTy. wE woULd wAnT tO pOTenTiaLLy
          meRch bOth zE aDvenTurE coMMuniTy aNd nFt cOmmuniTy aND jUst hAvE soMe
          baRbeQue aND aDvenTureS fOR zE hoLDeRs, pErhaPs iN nEar fUtuRe. eAcH
          sKyfLYPiE iS a uNiQuE dEGen oF zOmBiE & hUmAn bAse cHaRaCteRs wiTh
          moRe tHaN 60 uNiQuE trAiTs aNd iT iS LiVin' iN zE eThereUm bLoCkchAin
          fOReVer. bE uNiqUe daWgiEs, mOre AdVenTuReS, mOre sKydiViNG!!!
            </p>
            {/* <a className="button-link" href="javascript:void(0)">
              View More
            </a> */}
          </div>
        </div>
      </div>
    </>

  );
}
export default HeroSection;
