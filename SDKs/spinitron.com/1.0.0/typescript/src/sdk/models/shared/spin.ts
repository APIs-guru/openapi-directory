import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Link } from "./link";



export class SpinLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=playlist" })
  playlist?: Link;

  @SpeakeasyMetadata({ data: "json, name=self" })
  self?: Link;
}


export class Spin extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links" })
  links?: SpinLinks;

  @SpeakeasyMetadata({ data: "json, name=artist" })
  artist?: string;

  @SpeakeasyMetadata({ data: "json, name=artist-custom" })
  artistCustom?: string;

  @SpeakeasyMetadata({ data: "json, name=catalog-number" })
  catalogNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=classical" })
  classical?: boolean;

  @SpeakeasyMetadata({ data: "json, name=composer" })
  composer?: string;

  @SpeakeasyMetadata({ data: "json, name=conductor" })
  conductor?: string;

  @SpeakeasyMetadata({ data: "json, name=duration" })
  duration?: number;

  @SpeakeasyMetadata({ data: "json, name=end" })
  end?: Date;

  @SpeakeasyMetadata({ data: "json, name=ensemble" })
  ensemble?: string;

  @SpeakeasyMetadata({ data: "json, name=genre" })
  genre?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=image" })
  image?: string;

  @SpeakeasyMetadata({ data: "json, name=isrc" })
  isrc?: string;

  @SpeakeasyMetadata({ data: "json, name=iswc" })
  iswc?: string;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=label-custom" })
  labelCustom?: string;

  @SpeakeasyMetadata({ data: "json, name=local" })
  local?: boolean;

  @SpeakeasyMetadata({ data: "json, name=medium" })
  medium?: string;

  @SpeakeasyMetadata({ data: "json, name=new" })
  new?: boolean;

  @SpeakeasyMetadata({ data: "json, name=note" })
  note?: string;

  @SpeakeasyMetadata({ data: "json, name=performers" })
  performers?: string;

  @SpeakeasyMetadata({ data: "json, name=playlist_id" })
  playlistId?: number;

  @SpeakeasyMetadata({ data: "json, name=release" })
  release?: string;

  @SpeakeasyMetadata({ data: "json, name=release-custom" })
  releaseCustom?: string;

  @SpeakeasyMetadata({ data: "json, name=released" })
  released?: number;

  @SpeakeasyMetadata({ data: "json, name=request" })
  request?: boolean;

  @SpeakeasyMetadata({ data: "json, name=song" })
  song?: string;

  @SpeakeasyMetadata({ data: "json, name=start" })
  start?: Date;

  @SpeakeasyMetadata({ data: "json, name=timezone" })
  timezone?: string;

  @SpeakeasyMetadata({ data: "json, name=upc" })
  upc?: string;

  @SpeakeasyMetadata({ data: "json, name=va" })
  va?: boolean;

  @SpeakeasyMetadata({ data: "json, name=work" })
  work?: string;
}
