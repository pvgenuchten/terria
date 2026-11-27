/**
 * @license
 * Cesium - https://github.com/CesiumGS/cesium
 * Version 1.142.0
 *
 * Copyright 2011-2022 Cesium Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Columbus View (Pat. Pend.)
 *
 * Portions licensed separately.
 * See https://github.com/CesiumGS/cesium/blob/main/LICENSE.md for full licensing details.
 */

import {
  PrimitivePipeline_default
} from "./chunk-BKSYGDLQ.js";
import {
  createTaskProcessorWorker_default
} from "./chunk-XDTUT33E.js";
import "./chunk-W57Z4ZUR.js";
import "./chunk-4SLM7T7K.js";
import "./chunk-U5D4AUVM.js";
import "./chunk-ZNVVLSWJ.js";
import "./chunk-GMUSN5PN.js";
import "./chunk-LLU3ULGV.js";
import "./chunk-32VRDD6Z.js";
import "./chunk-UKG5YOQV.js";
import "./chunk-RANLBNNO.js";
import "./chunk-4PE4I64N.js";
import "./chunk-C6J67V5A.js";
import "./chunk-YOSNJCO3.js";
import "./chunk-GFTIWXMY.js";
import "./chunk-K2S5XG4P.js";
import "./chunk-TKKIREQ6.js";
import "./chunk-5XHFLHYM.js";
import "./chunk-RBGGCOP2.js";
import "./chunk-ZIBMMW37.js";
import "./chunk-MKVFXJZD.js";
import "./chunk-CSQB4T3T.js";
import "./chunk-PHLAVICN.js";

// packages/engine/Source/Workers/combineGeometry.js
function combineGeometry(packedParameters, transferableObjects) {
  const parameters = PrimitivePipeline_default.unpackCombineGeometryParameters(packedParameters);
  const results = PrimitivePipeline_default.combineGeometry(parameters);
  return PrimitivePipeline_default.packCombineGeometryResults(
    results,
    transferableObjects
  );
}
var combineGeometry_default = createTaskProcessorWorker_default(combineGeometry);
export {
  combineGeometry_default as default
};
