import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class FindTweetsByIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=expansions" })
  expansions?: shared.TweetExpansionsParameterEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=ids" })
  ids: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=media.fields" })
  mediaFields?: shared.MediaFieldsParameterEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=place.fields" })
  placeFields?: shared.PlaceFieldsParameterEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=poll.fields" })
  pollFields?: shared.PollFieldsParameterEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=tweet.fields" })
  tweetFields?: shared.TweetFieldsParameterEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=user.fields" })
  userFields?: shared.UserFieldsParameterEnum[];
}


export class FindTweetsByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: FindTweetsByIdQueryParams;
}


export class FindTweetsByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: any;

  @SpeakeasyMetadata()
  problem?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tweetLookupResponse?: shared.TweetLookupResponse;
}
