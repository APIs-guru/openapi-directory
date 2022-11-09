import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
    Unspecified = "Unspecified"
,    Japanese = "Japanese"
,    Romaji = "Romaji"
,    English = "English"
}

export enum AlbumForApiContractDiscTypeEnum {
    Unknown = "Unknown"
,    Album = "Album"
,    Single = "Single"
,    Ep = "EP"
,    SplitAlbum = "SplitAlbum"
,    Compilation = "Compilation"
,    Video = "Video"
,    Artbook = "Artbook"
,    Game = "Game"
,    Fanmade = "Fanmade"
,    Instrumental = "Instrumental"
,    Other = "Other"
}

export enum AlbumForApiContractStatusEnum {
    Draft = "Draft"
,    Finished = "Finished"
,    Approved = "Approved"
,    Locked = "Locked"
}


export class AlbumForApiContract extends SpeakeasyBase {
  @Metadata({ data: "json, name=additionalNames" })
  additionalNames?: string;

  @Metadata({ data: "json, name=artistString" })
  artistString?: string;

  @Metadata({ data: "json, name=artists", elemType: shared.ArtistForAlbumForApiContract })
  artists?: ArtistForAlbumForApiContract[];

  @Metadata({ data: "json, name=barcode" })
  barcode?: string;

  @Metadata({ data: "json, name=catalogNumber" })
  catalogNumber?: string;

  @Metadata({ data: "json, name=createDate" })
  createDate?: Date;

  @Metadata({ data: "json, name=defaultName" })
  defaultName?: string;

  @Metadata({ data: "json, name=defaultNameLanguage" })
  defaultNameLanguage?: AlbumForApiContractDefaultNameLanguageEnum;

  @Metadata({ data: "json, name=deleted" })
  deleted?: boolean;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=discType" })
  discType?: AlbumForApiContractDiscTypeEnum;

  @Metadata({ data: "json, name=discs", elemType: shared.AlbumDiscPropertiesContract })
  discs?: AlbumDiscPropertiesContract[];

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=identifiers", elemType: shared.AlbumIdentifierContract })
  identifiers?: AlbumIdentifierContract[];

  @Metadata({ data: "json, name=mainPicture" })
  mainPicture?: EntryThumbForApiContract;

  @Metadata({ data: "json, name=mergedTo" })
  mergedTo?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=names", elemType: shared.LocalizedStringContract })
  names?: LocalizedStringContract[];

  @Metadata({ data: "json, name=pvs", elemType: shared.PvContract })
  pvs?: PvContract[];

  @Metadata({ data: "json, name=ratingAverage" })
  ratingAverage?: number;

  @Metadata({ data: "json, name=ratingCount" })
  ratingCount?: number;

  @Metadata({ data: "json, name=releaseDate" })
  releaseDate?: OptionalDateTimeContract;

  @Metadata({ data: "json, name=releaseEvent" })
  releaseEvent?: ReleaseEventForApiContract;

  @Metadata({ data: "json, name=status" })
  status?: AlbumForApiContractStatusEnum;

  @Metadata({ data: "json, name=tags", elemType: shared.TagUsageForApiContract })
  tags?: TagUsageForApiContract[];

  @Metadata({ data: "json, name=tracks", elemType: shared.SongInAlbumForApiContract })
  tracks?: SongInAlbumForApiContract[];

  @Metadata({ data: "json, name=version" })
  version?: number;

  @Metadata({ data: "json, name=webLinks", elemType: shared.WebLinkForApiContract })
  webLinks?: WebLinkForApiContract[];
}
