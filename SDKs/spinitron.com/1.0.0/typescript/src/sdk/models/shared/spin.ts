import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Link } from "./link";
import { Link } from "./link";


export class SpinLinks extends SpeakeasyBase {
  @Metadata({ data: "json, name=playlist" })
  playlist?: Link;

  @Metadata({ data: "json, name=self" })
  self?: Link;
}


export class Spin extends SpeakeasyBase {
  @Metadata({ data: "json, name=_links" })
  links?: SpinLinks;

  @Metadata({ data: "json, name=artist" })
  artist?: string;

  @Metadata({ data: "json, name=artist-custom" })
  artistCustom?: string;

  @Metadata({ data: "json, name=catalog-number" })
  catalogNumber?: string;

  @Metadata({ data: "json, name=classical" })
  classical?: boolean;

  @Metadata({ data: "json, name=composer" })
  composer?: string;

  @Metadata({ data: "json, name=conductor" })
  conductor?: string;

  @Metadata({ data: "json, name=duration" })
  duration?: number;

  @Metadata({ data: "json, name=end" })
  end?: Date;

  @Metadata({ data: "json, name=ensemble" })
  ensemble?: string;

  @Metadata({ data: "json, name=genre" })
  genre?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=image" })
  image?: string;

  @Metadata({ data: "json, name=isrc" })
  isrc?: string;

  @Metadata({ data: "json, name=iswc" })
  iswc?: string;

  @Metadata({ data: "json, name=label" })
  label?: string;

  @Metadata({ data: "json, name=label-custom" })
  labelCustom?: string;

  @Metadata({ data: "json, name=local" })
  local?: boolean;

  @Metadata({ data: "json, name=medium" })
  medium?: string;

  @Metadata({ data: "json, name=new" })
  new?: boolean;

  @Metadata({ data: "json, name=note" })
  note?: string;

  @Metadata({ data: "json, name=performers" })
  performers?: string;

  @Metadata({ data: "json, name=playlist_id" })
  playlistId?: number;

  @Metadata({ data: "json, name=release" })
  release?: string;

  @Metadata({ data: "json, name=release-custom" })
  releaseCustom?: string;

  @Metadata({ data: "json, name=released" })
  released?: number;

  @Metadata({ data: "json, name=request" })
  request?: boolean;

  @Metadata({ data: "json, name=song" })
  song?: string;

  @Metadata({ data: "json, name=start" })
  start?: Date;

  @Metadata({ data: "json, name=timezone" })
  timezone?: string;

  @Metadata({ data: "json, name=upc" })
  upc?: string;

  @Metadata({ data: "json, name=va" })
  va?: boolean;

  @Metadata({ data: "json, name=work" })
  work?: string;
}
