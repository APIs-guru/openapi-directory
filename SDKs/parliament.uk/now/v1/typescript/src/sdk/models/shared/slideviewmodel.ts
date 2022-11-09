import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LineViewModel } from "./lineviewmodel";

export enum SlideViewModelSoundToPlayEnum {
    NewSlide = "NewSlide"
,    DivisionBell = "DivisionBell"
,    Alert = "Alert"
,    GenericBeep = "GenericBeep"
}

export enum SlideViewModelTypeEnum {
    Debate = "Debate"
,    Division = "Division"
,    OralQuestionTime = "OralQuestionTime"
,    UrgentQuestion = "UrgentQuestion"
,    Statement = "Statement"
,    Prayers = "Prayers"
,    HouseRisen = "HouseRisen"
,    Generic = "Generic"
,    NotSitting = "NotSitting"
,    PrimeMinistersQuestions = "PrimeMinistersQuestions"
,    PointsOfOrder = "PointsOfOrder"
,    BlankSlide = "BlankSlide"
}


export class SlideViewModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=carouselDisplaySeconds" })
  carouselDisplaySeconds?: number;

  @Metadata({ data: "json, name=carouselOrder" })
  carouselOrder?: number;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=lines", elemType: shared.LineViewModel })
  lines?: LineViewModel[];

  @Metadata({ data: "json, name=slideTime" })
  slideTime?: Date;

  @Metadata({ data: "json, name=soundToPlay" })
  soundToPlay?: SlideViewModelSoundToPlayEnum;

  @Metadata({ data: "json, name=speakerTime" })
  speakerTime?: Date;

  @Metadata({ data: "json, name=type" })
  type?: SlideViewModelTypeEnum;
}
