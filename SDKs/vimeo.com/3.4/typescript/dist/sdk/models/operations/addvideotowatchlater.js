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
var AddVideoToWatchLaterPathParams = /** @class */ (function (_super) {
    __extends(AddVideoToWatchLaterPathParams, _super);
    function AddVideoToWatchLaterPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" }),
        __metadata("design:type", Number)
    ], AddVideoToWatchLaterPathParams.prototype, "userId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=video_id" }),
        __metadata("design:type", Number)
    ], AddVideoToWatchLaterPathParams.prototype, "videoId", void 0);
    return AddVideoToWatchLaterPathParams;
}(SpeakeasyBase));
export { AddVideoToWatchLaterPathParams };
var AddVideoToWatchLaterSecurity = /** @class */ (function (_super) {
    __extends(AddVideoToWatchLaterSecurity, _super);
    function AddVideoToWatchLaterSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AddVideoToWatchLaterSecurity.prototype, "oauth2", void 0);
    return AddVideoToWatchLaterSecurity;
}(SpeakeasyBase));
export { AddVideoToWatchLaterSecurity };
var AddVideoToWatchLaterRequest = /** @class */ (function (_super) {
    __extends(AddVideoToWatchLaterRequest, _super);
    function AddVideoToWatchLaterRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AddVideoToWatchLaterPathParams)
    ], AddVideoToWatchLaterRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AddVideoToWatchLaterSecurity)
    ], AddVideoToWatchLaterRequest.prototype, "security", void 0);
    return AddVideoToWatchLaterRequest;
}(SpeakeasyBase));
export { AddVideoToWatchLaterRequest };
var AddVideoToWatchLaterResponse = /** @class */ (function (_super) {
    __extends(AddVideoToWatchLaterResponse, _super);
    function AddVideoToWatchLaterResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AddVideoToWatchLaterResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AddVideoToWatchLaterResponse.prototype, "statusCode", void 0);
    return AddVideoToWatchLaterResponse;
}(SpeakeasyBase));
export { AddVideoToWatchLaterResponse };
