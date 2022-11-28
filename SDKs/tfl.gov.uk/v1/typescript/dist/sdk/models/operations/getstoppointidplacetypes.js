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
var GetStopPointIdPlaceTypesPathParams = /** @class */ (function (_super) {
    __extends(GetStopPointIdPlaceTypesPathParams, _super);
    function GetStopPointIdPlaceTypesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetStopPointIdPlaceTypesPathParams.prototype, "id", void 0);
    return GetStopPointIdPlaceTypesPathParams;
}(SpeakeasyBase));
export { GetStopPointIdPlaceTypesPathParams };
var GetStopPointIdPlaceTypesQueryParams = /** @class */ (function (_super) {
    __extends(GetStopPointIdPlaceTypesQueryParams, _super);
    function GetStopPointIdPlaceTypesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=placeTypes" }),
        __metadata("design:type", Array)
    ], GetStopPointIdPlaceTypesQueryParams.prototype, "placeTypes", void 0);
    return GetStopPointIdPlaceTypesQueryParams;
}(SpeakeasyBase));
export { GetStopPointIdPlaceTypesQueryParams };
var GetStopPointIdPlaceTypesRequest = /** @class */ (function (_super) {
    __extends(GetStopPointIdPlaceTypesRequest, _super);
    function GetStopPointIdPlaceTypesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetStopPointIdPlaceTypesPathParams)
    ], GetStopPointIdPlaceTypesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetStopPointIdPlaceTypesQueryParams)
    ], GetStopPointIdPlaceTypesRequest.prototype, "queryParams", void 0);
    return GetStopPointIdPlaceTypesRequest;
}(SpeakeasyBase));
export { GetStopPointIdPlaceTypesRequest };
var GetStopPointIdPlaceTypesResponse = /** @class */ (function (_super) {
    __extends(GetStopPointIdPlaceTypesResponse, _super);
    function GetStopPointIdPlaceTypesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetStopPointIdPlaceTypesResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetStopPointIdPlaceTypesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetStopPointIdPlaceTypesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.TflApiPresentationEntitiesPlace }),
        __metadata("design:type", Array)
    ], GetStopPointIdPlaceTypesResponse.prototype, "tflApiPresentationEntitiesPlaces", void 0);
    return GetStopPointIdPlaceTypesResponse;
}(SpeakeasyBase));
export { GetStopPointIdPlaceTypesResponse };
