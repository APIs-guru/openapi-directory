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
export var GetGetPathwayHistoryFormatEnum;
(function (GetGetPathwayHistoryFormatEnum) {
    GetGetPathwayHistoryFormatEnum["Json"] = "json";
    GetGetPathwayHistoryFormatEnum["Xml"] = "xml";
    GetGetPathwayHistoryFormatEnum["Html"] = "html";
    GetGetPathwayHistoryFormatEnum["Dump"] = "dump";
    GetGetPathwayHistoryFormatEnum["Jpg"] = "jpg";
    GetGetPathwayHistoryFormatEnum["Pdf"] = "pdf";
})(GetGetPathwayHistoryFormatEnum || (GetGetPathwayHistoryFormatEnum = {}));
var GetGetPathwayHistoryQueryParams = /** @class */ (function (_super) {
    __extends(GetGetPathwayHistoryQueryParams, _super);
    function GetGetPathwayHistoryQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" }),
        __metadata("design:type", String)
    ], GetGetPathwayHistoryQueryParams.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pwId" }),
        __metadata("design:type", String)
    ], GetGetPathwayHistoryQueryParams.prototype, "pwId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timestamp" }),
        __metadata("design:type", String)
    ], GetGetPathwayHistoryQueryParams.prototype, "timestamp", void 0);
    return GetGetPathwayHistoryQueryParams;
}(SpeakeasyBase));
export { GetGetPathwayHistoryQueryParams };
var GetGetPathwayHistoryRequest = /** @class */ (function (_super) {
    __extends(GetGetPathwayHistoryRequest, _super);
    function GetGetPathwayHistoryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetGetPathwayHistoryQueryParams)
    ], GetGetPathwayHistoryRequest.prototype, "queryParams", void 0);
    return GetGetPathwayHistoryRequest;
}(SpeakeasyBase));
export { GetGetPathwayHistoryRequest };
var GetGetPathwayHistoryResponse = /** @class */ (function (_super) {
    __extends(GetGetPathwayHistoryResponse, _super);
    function GetGetPathwayHistoryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetGetPathwayHistoryResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetGetPathwayHistoryResponse.prototype, "statusCode", void 0);
    return GetGetPathwayHistoryResponse;
}(SpeakeasyBase));
export { GetGetPathwayHistoryResponse };
