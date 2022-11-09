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
export var CurrentSeasontypeFormatEnum;
(function (CurrentSeasontypeFormatEnum) {
    CurrentSeasontypeFormatEnum["Xml"] = "XML";
    CurrentSeasontypeFormatEnum["Json"] = "JSON";
})(CurrentSeasontypeFormatEnum || (CurrentSeasontypeFormatEnum = {}));
var CurrentSeasontypePathParams = /** @class */ (function (_super) {
    __extends(CurrentSeasontypePathParams, _super);
    function CurrentSeasontypePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=format" }),
        __metadata("design:type", String)
    ], CurrentSeasontypePathParams.prototype, "format", void 0);
    return CurrentSeasontypePathParams;
}(SpeakeasyBase));
export { CurrentSeasontypePathParams };
var CurrentSeasontypeRequest = /** @class */ (function (_super) {
    __extends(CurrentSeasontypeRequest, _super);
    function CurrentSeasontypeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CurrentSeasontypePathParams)
    ], CurrentSeasontypeRequest.prototype, "pathParams", void 0);
    return CurrentSeasontypeRequest;
}(SpeakeasyBase));
export { CurrentSeasontypeRequest };
var CurrentSeasontypeResponse = /** @class */ (function (_super) {
    __extends(CurrentSeasontypeResponse, _super);
    function CurrentSeasontypeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CurrentSeasontypeResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CurrentSeasontypeResponse.prototype, "currentSeasontype200ApplicationJsonString", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CurrentSeasontypeResponse.prototype, "statusCode", void 0);
    return CurrentSeasontypeResponse;
}(SpeakeasyBase));
export { CurrentSeasontypeResponse };
