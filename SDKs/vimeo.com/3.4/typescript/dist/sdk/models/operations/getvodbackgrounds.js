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
var GetVodBackgroundsPathParams = /** @class */ (function (_super) {
    __extends(GetVodBackgroundsPathParams, _super);
    function GetVodBackgroundsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ondemand_id" }),
        __metadata("design:type", Number)
    ], GetVodBackgroundsPathParams.prototype, "ondemandId", void 0);
    return GetVodBackgroundsPathParams;
}(SpeakeasyBase));
export { GetVodBackgroundsPathParams };
var GetVodBackgroundsQueryParams = /** @class */ (function (_super) {
    __extends(GetVodBackgroundsQueryParams, _super);
    function GetVodBackgroundsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetVodBackgroundsQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetVodBackgroundsQueryParams.prototype, "perPage", void 0);
    return GetVodBackgroundsQueryParams;
}(SpeakeasyBase));
export { GetVodBackgroundsQueryParams };
var GetVodBackgroundsRequest = /** @class */ (function (_super) {
    __extends(GetVodBackgroundsRequest, _super);
    function GetVodBackgroundsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetVodBackgroundsPathParams)
    ], GetVodBackgroundsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetVodBackgroundsQueryParams)
    ], GetVodBackgroundsRequest.prototype, "queryParams", void 0);
    return GetVodBackgroundsRequest;
}(SpeakeasyBase));
export { GetVodBackgroundsRequest };
var GetVodBackgroundsResponse = /** @class */ (function (_super) {
    __extends(GetVodBackgroundsResponse, _super);
    function GetVodBackgroundsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetVodBackgroundsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetVodBackgroundsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LegacyError)
    ], GetVodBackgroundsResponse.prototype, "legacyError", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.Picture }),
        __metadata("design:type", Array)
    ], GetVodBackgroundsResponse.prototype, "pictures", void 0);
    return GetVodBackgroundsResponse;
}(SpeakeasyBase));
export { GetVodBackgroundsResponse };
