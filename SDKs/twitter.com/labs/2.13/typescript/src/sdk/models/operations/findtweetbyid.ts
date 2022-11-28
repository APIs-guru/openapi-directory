import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class FindTweetByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class FindTweetByIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=expansions" })
  expansions?: shared.TweetExpansionsParameterEnum[];

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


export class FindTweetByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: FindTweetByIdPathParams;

  @SpeakeasyMetadata()
  queryParams: FindTweetByIdQueryParams;
}


export class FindTweetByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: any;

  @SpeakeasyMetadata()
  problem?: any;

  @SpeakeasyMetadata()
  singleTweetLookupResponse?: shared.SingleTweetLookupResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
