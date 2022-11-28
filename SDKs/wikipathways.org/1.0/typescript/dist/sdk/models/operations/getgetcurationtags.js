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
export var GetGetCurationTagsFormatEnum;
(function (GetGetCurationTagsFormatEnum) {
    GetGetCurationTagsFormatEnum["Json"] = "json";
    GetGetCurationTagsFormatEnum["Xml"] = "xml";
    GetGetCurationTagsFormatEnum["Html"] = "html";
    GetGetCurationTagsFormatEnum["Dump"] = "dump";
    GetGetCurationTagsFormatEnum["Jpg"] = "jpg";
    GetGetCurationTagsFormatEnum["Pdf"] = "pdf";
})(GetGetCurationTagsFormatEnum || (GetGetCurationTagsFormatEnum = {}));
var GetGetCurationTagsQueryParams = /** @class */ (function (_super) {
    __extends(GetGetCurationTagsQueryParams, _super);
    function GetGetCurationTagsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" }),
        __metadata("design:type", String)
    ], GetGetCurationTagsQueryParams.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pwId" }),
        __metadata("design:type", String)
    ], GetGetCurationTagsQueryParams.prototype, "pwId", void 0);
    return GetGetCurationTagsQueryParams;
}(SpeakeasyBase));
export { GetGetCurationTagsQueryParams };
var GetGetCurationTagsRequest = /** @class */ (function (_super) {
    __extends(GetGetCurationTagsRequest, _super);
    function GetGetCurationTagsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetGetCurationTagsQueryParams)
    ], GetGetCurationTagsRequest.prototype, "queryParams", void 0);
    return GetGetCurationTagsRequest;
}(SpeakeasyBase));
export { GetGetCurationTagsRequest };
var GetGetCurationTagsResponse = /** @class */ (function (_super) {
    __extends(GetGetCurationTagsResponse, _super);
    function GetGetCurationTagsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetGetCurationTagsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetGetCurationTagsResponse.prototype, "statusCode", void 0);
    return GetGetCurationTagsResponse;
}(SpeakeasyBase));
export { GetGetCurationTagsResponse };
