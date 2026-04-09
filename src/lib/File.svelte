<script lang="ts">
  import { HardDriveDownloadIcon } from "lucide-svelte";
  import type { GoogleFile } from "./server";

  let { file }: { file: GoogleFile } = $props();
</script>

<a
  href={file.webContentLink || file.exportLinks?.["application/pdf"]}
  target="_blank"
  class="group card card-border shadow hover:shadow-xl transition"
>
  <div class="card-body">
    <h2 class="card-title">
      <span>{file.name.replace(/\.pdf$/, "")}</span>
      <HardDriveDownloadIcon
        class="ml-auto opacity-40 group-hover:opacity-100"
      />
    </h2>
    <p>
      Mise à jour: {new Date(file.modifiedTime).toLocaleDateString()}
    </p>
  </div>
</a>
