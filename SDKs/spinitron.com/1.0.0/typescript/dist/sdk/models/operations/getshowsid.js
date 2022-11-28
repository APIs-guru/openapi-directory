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
var GetShowsIdPathParams = /** @class */ (function (_super) {
    __extends(GetShowsIdPathParams, _super);
    function GetShowsIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], GetShowsIdPathParams.prototype, "id", void 0);
    return GetShowsIdPathParams;
}(SpeakeasyBase));
export { GetShowsIdPathParams };
var GetShowsIdQueryParams = /** @class */ (function (_super) {
    __extends(GetShowsIdQueryParams, _super);
    function GetShowsIdQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=expand" }),
        __metadata("design:type", Array)
    ], GetShowsIdQueryParams.prototype, "expand", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", Array)
    ], GetShowsIdQueryParams.prototype, "fields", void 0);
    return GetShowsIdQueryParams;
}(SpeakeasyBase));
export { GetShowsIdQueryParams };
var GetShowsIdRequest = /** @class */ (function (_super) {
    __extends(GetShowsIdRequest, _super);
    function GetShowsIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetShowsIdPathParams)
    ], GetShowsIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetShowsIdQueryParams)
    ], GetShowsIdRequest.prototype, "queryParams", void 0);
    return GetShowsIdRequest;
}(SpeakeasyBase));
export { GetShowsIdRequest };
var GetShowsIdResponse = /** @class */ (function (_super) {
    __extends(GetShowsIdResponse, _super);
    function GetShowsIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetShowsIdResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetShowsIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error)
    ], GetShowsIdResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Show)
    ], GetShowsIdResponse.prototype, "show", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetShowsIdResponse.prototype, "statusCode", void 0);
    return GetShowsIdResponse;
}(SpeakeasyBase));
export { GetShowsIdResponse };
