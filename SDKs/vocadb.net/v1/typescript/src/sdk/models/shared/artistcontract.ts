import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ArtistContractArtistTypeEnum {
    Unknown = "Unknown"
,    Circle = "Circle"
,    Label = "Label"
,    Producer = "Producer"
,    Animator = "Animator"
,    Illustrator = "Illustrator"
,    Lyricist = "Lyricist"
,    Vocaloid = "Vocaloid"
,    Utau = "UTAU"
,    CeVio = "CeVIO"
,    OtherVoiceSynthesizer = "OtherVoiceSynthesizer"
,    OtherVocalist = "OtherVocalist"
,    OtherGroup = "OtherGroup"
,    OtherIndividual = "OtherIndividual"
,    Utaite = "Utaite"
,    Band = "Band"
,    Vocalist = "Vocalist"
,    Character = "Character"
,    SynthesizerV = "SynthesizerV"
}

export enum ArtistContractStatusEnum {
    Draft = "Draft"
,    Finished = "Finished"
,    Approved = "Approved"
,    Locked = "Locked"
}


export class ArtistContract extends SpeakeasyBase {
  @Metadata({ data: "json, name=additionalNames" })
  additionalNames?: string;

  @Metadata({ data: "json, name=artistType" })
  artistType?: ArtistContractArtistTypeEnum;

  @Metadata({ data: "json, name=deleted" })
  deleted?: boolean;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=pictureMime" })
  pictureMime?: string;

  @Metadata({ data: "json, name=releaseDate" })
  releaseDate?: Date;

  @Metadata({ data: "json, name=status" })
  status?: ArtistContractStatusEnum;

  @Metadata({ data: "json, name=version" })
  version?: number;
}
