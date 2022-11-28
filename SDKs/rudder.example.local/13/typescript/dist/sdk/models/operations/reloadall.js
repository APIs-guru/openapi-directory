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
export var ReloadAll200ApplicationJsonActionEnum;
(function (ReloadAll200ApplicationJsonActionEnum) {
    ReloadAll200ApplicationJsonActionEnum["ReloadAll"] = "reloadAll";
})(ReloadAll200ApplicationJsonActionEnum || (ReloadAll200ApplicationJsonActionEnum = {}));
export var ReloadAll200ApplicationJsonDataGroupsEnum;
(function (ReloadAll200ApplicationJsonDataGroupsEnum) {
    ReloadAll200ApplicationJsonDataGroupsEnum["Started"] = "Started";
})(ReloadAll200ApplicationJsonDataGroupsEnum || (ReloadAll200ApplicationJsonDataGroupsEnum = {}));
export var ReloadAll200ApplicationJsonDataTechniquesEnum;
(function (ReloadAll200ApplicationJsonDataTechniquesEnum) {
    ReloadAll200ApplicationJsonDataTechniquesEnum["Started"] = "Started";
})(ReloadAll200ApplicationJsonDataTechniquesEnum || (ReloadAll200ApplicationJsonDataTechniquesEnum = {}));
var ReloadAll200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(ReloadAll200ApplicationJsonData, _super);
    function ReloadAll200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=groups" }),
        __metadata("design:type", String)
    ], ReloadAll200ApplicationJsonData.prototype, "groups", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=techniques" }),
        __metadata("design:type", String)
    ], ReloadAll200ApplicationJsonData.prototype, "techniques", void 0);
    return ReloadAll200ApplicationJsonData;
}(SpeakeasyBase));
export { ReloadAll200ApplicationJsonData };
export var ReloadAll200ApplicationJsonResultEnum;
(function (ReloadAll200ApplicationJsonResultEnum) {
    ReloadAll200ApplicationJsonResultEnum["Success"] = "success";
    ReloadAll200ApplicationJsonResultEnum["Error"] = "error";
})(ReloadAll200ApplicationJsonResultEnum || (ReloadAll200ApplicationJsonResultEnum = {}));
var ReloadAll200ApplicationJson = /** @class */ (function (_super) {
    __extends(ReloadAll200ApplicationJson, _super);
    function ReloadAll200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], ReloadAll200ApplicationJson.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", ReloadAll200ApplicationJsonData)
    ], ReloadAll200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", String)
    ], ReloadAll200ApplicationJson.prototype, "result", void 0);
    return ReloadAll200ApplicationJson;
}(SpeakeasyBase));
export { ReloadAll200ApplicationJson };
var ReloadAllResponse = /** @class */ (function (_super) {
    __extends(ReloadAllResponse, _super);
    function ReloadAllResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ReloadAllResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ReloadAllResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReloadAll200ApplicationJson)
    ], ReloadAllResponse.prototype, "reloadAll200ApplicationJsonObject", void 0);
    return ReloadAllResponse;
}(SpeakeasyBase));
export { ReloadAllResponse };
