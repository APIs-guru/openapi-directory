var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
var GetScrobbleShowsShowIdPathParams = /** @class */ (function (_super) {
    __extends(GetScrobbleShowsShowIdPathParams, _super);
    function GetScrobbleShowsShowIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=show_id" }),
        __metadata("design:type", Number)
    ], GetScrobbleShowsShowIdPathParams.prototype, "showId", void 0);
    return GetScrobbleShowsShowIdPathParams;
}(SpeakeasyBase));
export { GetScrobbleShowsShowIdPathParams };
export var GetScrobbleShowsShowIdEmbedEnum;
(function (GetScrobbleShowsShowIdEmbedEnum) {
    GetScrobbleShowsShowIdEmbedEnum["Episode"] = "episode";
})(GetScrobbleShowsShowIdEmbedEnum || (GetScrobbleShowsShowIdEmbedEnum = {}));
var GetScrobbleShowsShowIdQueryParams = /** @class */ (function (_super) {
    __extends(GetScrobbleShowsShowIdQueryParams, _super);
    function GetScrobbleShowsShowIdQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=embed" }),
        __metadata("design:type", String)
    ], GetScrobbleShowsShowIdQueryParams.prototype, "embed", void 0);
    return GetScrobbleShowsShowIdQueryParams;
}(SpeakeasyBase));
export { GetScrobbleShowsShowIdQueryParams };
var GetScrobbleShowsShowIdRequest = /** @class */ (function (_super) {
    __extends(GetScrobbleShowsShowIdRequest, _super);
    function GetScrobbleShowsShowIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetScrobbleShowsShowIdPathParams)
    ], GetScrobbleShowsShowIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetScrobbleShowsShowIdQueryParams)
    ], GetScrobbleShowsShowIdRequest.prototype, "queryParams", void 0);
    return GetScrobbleShowsShowIdRequest;
}(SpeakeasyBase));
export { GetScrobbleShowsShowIdRequest };
var GetScrobbleShowsShowIdResponse = /** @class */ (function (_super) {
    __extends(GetScrobbleShowsShowIdResponse, _super);
    function GetScrobbleShowsShowIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetScrobbleShowsShowIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.MarkedEpisode }),
        __metadata("design:type", Array)
    ], GetScrobbleShowsShowIdResponse.prototype, "markedEpisodes", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetScrobbleShowsShowIdResponse.prototype, "statusCode", void 0);
    return GetScrobbleShowsShowIdResponse;
}(SpeakeasyBase));
export { GetScrobbleShowsShowIdResponse };
