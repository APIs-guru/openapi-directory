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
export var GetSaveCurationTagFormatEnum;
(function (GetSaveCurationTagFormatEnum) {
    GetSaveCurationTagFormatEnum["Json"] = "json";
    GetSaveCurationTagFormatEnum["Xml"] = "xml";
    GetSaveCurationTagFormatEnum["Html"] = "html";
    GetSaveCurationTagFormatEnum["Dump"] = "dump";
    GetSaveCurationTagFormatEnum["Jpg"] = "jpg";
    GetSaveCurationTagFormatEnum["Pdf"] = "pdf";
})(GetSaveCurationTagFormatEnum || (GetSaveCurationTagFormatEnum = {}));
var GetSaveCurationTagQueryParams = /** @class */ (function (_super) {
    __extends(GetSaveCurationTagQueryParams, _super);
    function GetSaveCurationTagQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=auth" }),
        __metadata("design:type", String)
    ], GetSaveCurationTagQueryParams.prototype, "auth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" }),
        __metadata("design:type", String)
    ], GetSaveCurationTagQueryParams.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pwId" }),
        __metadata("design:type", String)
    ], GetSaveCurationTagQueryParams.prototype, "pwId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=revision" }),
        __metadata("design:type", Number)
    ], GetSaveCurationTagQueryParams.prototype, "revision", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tagName" }),
        __metadata("design:type", String)
    ], GetSaveCurationTagQueryParams.prototype, "tagName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=text" }),
        __metadata("design:type", String)
    ], GetSaveCurationTagQueryParams.prototype, "text", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=username" }),
        __metadata("design:type", String)
    ], GetSaveCurationTagQueryParams.prototype, "username", void 0);
    return GetSaveCurationTagQueryParams;
}(SpeakeasyBase));
export { GetSaveCurationTagQueryParams };
var GetSaveCurationTagRequest = /** @class */ (function (_super) {
    __extends(GetSaveCurationTagRequest, _super);
    function GetSaveCurationTagRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSaveCurationTagQueryParams)
    ], GetSaveCurationTagRequest.prototype, "queryParams", void 0);
    return GetSaveCurationTagRequest;
}(SpeakeasyBase));
export { GetSaveCurationTagRequest };
var GetSaveCurationTagResponse = /** @class */ (function (_super) {
    __extends(GetSaveCurationTagResponse, _super);
    function GetSaveCurationTagResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetSaveCurationTagResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetSaveCurationTagResponse.prototype, "statusCode", void 0);
    return GetSaveCurationTagResponse;
}(SpeakeasyBase));
export { GetSaveCurationTagResponse };
