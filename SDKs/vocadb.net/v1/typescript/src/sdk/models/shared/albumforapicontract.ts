import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ArtistForAlbumForApiContract } from "./artistforalbumforapicontract";
import { AlbumDiscPropertiesContract } from "./albumdiscpropertiescontract";
import { AlbumIdentifierContract } from "./albumidentifiercontract";
import { EntryThumbForApiContract } from "./entrythumbforapicontract";
import { LocalizedStringContract } from "./localizedstringcontract";
import { PvContract } from "./pvcontract";
import { OptionalDateTimeContract } from "./optionaldatetimecontract";
import { ReleaseEventForApiContract } from "./releaseeventforapicontract";
import { TagUsageForApiContract } from "./tagusageforapicontract";
import { SongInAlbumForApiContract } from "./songinalbumforapicontract";
import { WebLinkForApiContract } from "./weblinkforapicontract";


export enum AlbumForApiContractDefaultNameLanguageEnum {
    Unspecified = "Unspecified",
    Japanese = "Japanese",
    Romaji = "Romaji",
    English = "English"
}

export enum AlbumForApiContractDiscTypeEnum {
    Unknown = "Unknown",
    Album = "Album",
    Single = "Single",
    Ep = "EP",
    SplitAlbum = "SplitAlbum",
    Compilation = "Compilation",
    Video = "Video",
    Artbook = "Artbook",
    Game = "Game",
    Fanmade = "Fanmade",
    Instrumental = "Instrumental",
    Other = "Other"
}

export enum AlbumForApiContractStatusEnum {
    Draft = "Draft",
    Finished = "Finished",
    Approved = "Approved",
    Locked = "Locked"
}


export class AlbumForApiContract extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additionalNames" })
  additionalNames?: string;

  @SpeakeasyMetadata({ data: "json, name=artistString" })
  artistString?: string;

  @SpeakeasyMetadata({ data: "json, name=artists", elemType: ArtistForAlbumForApiContract })
  artists?: ArtistForAlbumForApiContract[];

  @SpeakeasyMetadata({ data: "json, name=barcode" })
  barcode?: string;

  @SpeakeasyMetadata({ data: "json, name=catalogNumber" })
  catalogNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=createDate" })
  createDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=defaultName" })
  defaultName?: string;

  @SpeakeasyMetadata({ data: "json, name=defaultNameLanguage" })
  defaultNameLanguage?: AlbumForApiContractDefaultNameLanguageEnum;

  @SpeakeasyMetadata({ data: "json, name=deleted" })
  deleted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=discType" })
  discType?: AlbumForApiContractDiscTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=discs", elemType: AlbumDiscPropertiesContract })
  discs?: AlbumDiscPropertiesContract[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=identifiers", elemType: AlbumIdentifierContract })
  identifiers?: AlbumIdentifierContract[];

  @SpeakeasyMetadata({ data: "json, name=mainPicture" })
  mainPicture?: EntryThumbForApiContract;

  @SpeakeasyMetadata({ data: "json, name=mergedTo" })
  mergedTo?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=names", elemType: LocalizedStringContract })
  names?: LocalizedStringContract[];

  @SpeakeasyMetadata({ data: "json, name=pvs", elemType: PvContract })
  pvs?: PvContract[];

  @SpeakeasyMetadata({ data: "json, name=ratingAverage" })
  ratingAverage?: number;

  @SpeakeasyMetadata({ data: "json, name=ratingCount" })
  ratingCount?: number;

  @SpeakeasyMetadata({ data: "json, name=releaseDate" })
  releaseDate?: OptionalDateTimeContract;

  @SpeakeasyMetadata({ data: "json, name=releaseEvent" })
  releaseEvent?: ReleaseEventForApiContract;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: AlbumForApiContractStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: TagUsageForApiContract })
  tags?: TagUsageForApiContract[];

  @SpeakeasyMetadata({ data: "json, name=tracks", elemType: SongInAlbumForApiContract })
  tracks?: SongInAlbumForApiContract[];

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: number;

  @SpeakeasyMetadata({ data: "json, name=webLinks", elemType: WebLinkForApiContract })
  webLinks?: WebLinkForApiContract[];
}
