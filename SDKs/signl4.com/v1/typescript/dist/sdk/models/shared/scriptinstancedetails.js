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
import { ScriptInstanceInfoRuntimeInformationModel } from "./scriptinstanceinforuntimeinformationmodel";
var ScriptInstanceDetails = /** @class */ (function (_super) {
    __extends(ScriptInstanceDetails, _super);
    function ScriptInstanceDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=config" }),
        __metadata("design:type", Object)
    ], ScriptInstanceDetails.prototype, "config", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customScriptDescription" }),
        __metadata("design:type", String)
    ], ScriptInstanceDetails.prototype, "customScriptDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customScriptName" }),
        __metadata("design:type", String)
    ], ScriptInstanceDetails.prototype, "customScriptName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enabled" }),
        __metadata("design:type", Boolean)
    ], ScriptInstanceDetails.prototype, "enabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eventPattern" }),
        __metadata("design:type", Object)
    ], ScriptInstanceDetails.prototype, "eventPattern", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=instanceId" }),
        __metadata("design:type", String)
    ], ScriptInstanceDetails.prototype, "instanceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastModified" }),
        __metadata("design:type", Date)
    ], ScriptInstanceDetails.prototype, "lastModified", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=runtimeInformation" }),
        __metadata("design:type", ScriptInstanceInfoRuntimeInformationModel)
    ], ScriptInstanceDetails.prototype, "runtimeInformation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scriptId" }),
        __metadata("design:type", String)
    ], ScriptInstanceDetails.prototype, "scriptId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scriptName" }),
        __metadata("design:type", String)
    ], ScriptInstanceDetails.prototype, "scriptName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subscriptionId" }),
        __metadata("design:type", String)
    ], ScriptInstanceDetails.prototype, "subscriptionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=teamId" }),
        __metadata("design:type", String)
    ], ScriptInstanceDetails.prototype, "teamId", void 0);
    return ScriptInstanceDetails;
}(SpeakeasyBase));
export { ScriptInstanceDetails };
