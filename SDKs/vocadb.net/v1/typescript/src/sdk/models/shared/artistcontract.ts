import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ArtistContractArtistTypeEnum {
    Unknown = "Unknown",
    Circle = "Circle",
    Label = "Label",
    Producer = "Producer",
    Animator = "Animator",
    Illustrator = "Illustrator",
    Lyricist = "Lyricist",
    Vocaloid = "Vocaloid",
    Utau = "UTAU",
    CeVio = "CeVIO",
    OtherVoiceSynthesizer = "OtherVoiceSynthesizer",
    OtherVocalist = "OtherVocalist",
    OtherGroup = "OtherGroup",
    OtherIndividual = "OtherIndividual",
    Utaite = "Utaite",
    Band = "Band",
    Vocalist = "Vocalist",
    Character = "Character",
    SynthesizerV = "SynthesizerV"
}

export enum ArtistContractStatusEnum {
    Draft = "Draft",
    Finished = "Finished",
    Approved = "Approved",
    Locked = "Locked"
}


export class ArtistContract extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additionalNames" })
  additionalNames?: string;

  @SpeakeasyMetadata({ data: "json, name=artistType" })
  artistType?: ArtistContractArtistTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=deleted" })
  deleted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=pictureMime" })
  pictureMime?: string;

  @SpeakeasyMetadata({ data: "json, name=releaseDate" })
  releaseDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ArtistContractStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: number;
}
