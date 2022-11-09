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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
export var BoxScoresDeltaVFormatEnum;
(function (BoxScoresDeltaVFormatEnum) {
    BoxScoresDeltaVFormatEnum["Xml"] = "XML";
    BoxScoresDeltaVFormatEnum["Json"] = "JSON";
})(BoxScoresDeltaVFormatEnum || (BoxScoresDeltaVFormatEnum = {}));
export var BoxScoresDeltaVPlayerstoincludeEnum;
(function (BoxScoresDeltaVPlayerstoincludeEnum) {
    BoxScoresDeltaVPlayerstoincludeEnum["All"] = "all";
    BoxScoresDeltaVPlayerstoincludeEnum["Fantasy"] = "fantasy";
    BoxScoresDeltaVPlayerstoincludeEnum["Idp"] = "idp";
})(BoxScoresDeltaVPlayerstoincludeEnum || (BoxScoresDeltaVPlayerstoincludeEnum = {}));
var BoxScoresDeltaVPathParams = /** @class */ (function (_super) {
    __extends(BoxScoresDeltaVPathParams, _super);
    function BoxScoresDeltaVPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=format" }),
        __metadata("design:type", String)
    ], BoxScoresDeltaVPathParams.prototype, "format", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=minutes" }),
        __metadata("design:type", String)
    ], BoxScoresDeltaVPathParams.prototype, "minutes", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=playerstoinclude" }),
        __metadata("design:type", String)
    ], BoxScoresDeltaVPathParams.prototype, "playerstoinclude", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=season" }),
        __metadata("design:type", String)
    ], BoxScoresDeltaVPathParams.prototype, "season", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=week" }),
        __metadata("design:type", String)
    ], BoxScoresDeltaVPathParams.prototype, "week", void 0);
    return BoxScoresDeltaVPathParams;
}(SpeakeasyBase));
export { BoxScoresDeltaVPathParams };
var BoxScoresDeltaVRequest = /** @class */ (function (_super) {
    __extends(BoxScoresDeltaVRequest, _super);
    function BoxScoresDeltaVRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", BoxScoresDeltaVPathParams)
    ], BoxScoresDeltaVRequest.prototype, "pathParams", void 0);
    return BoxScoresDeltaVRequest;
}(SpeakeasyBase));
export { BoxScoresDeltaVRequest };
var BoxScoresDeltaVResponse = /** @class */ (function (_super) {
    __extends(BoxScoresDeltaVResponse, _super);
    function BoxScoresDeltaVResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Array)
    ], BoxScoresDeltaVResponse.prototype, "boxScoreV3s", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], BoxScoresDeltaVResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], BoxScoresDeltaVResponse.prototype, "statusCode", void 0);
    return BoxScoresDeltaVResponse;
}(SpeakeasyBase));
export { BoxScoresDeltaVResponse };
