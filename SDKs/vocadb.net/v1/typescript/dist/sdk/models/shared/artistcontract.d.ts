import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ArtistContractArtistTypeEnum {
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
export declare enum ArtistContractStatusEnum {
    Draft = "Draft",
    Finished = "Finished",
    Approved = "Approved",
    Locked = "Locked"
}
export declare class ArtistContract extends SpeakeasyBase {
    additionalNames?: string;
    artistType?: ArtistContractArtistTypeEnum;
    deleted?: boolean;
    id?: number;
    name?: string;
    pictureMime?: string;
    releaseDate?: Date;
    status?: ArtistContractStatusEnum;
    version?: number;
}
