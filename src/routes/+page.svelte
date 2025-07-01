<script lang="ts">
  import Navbar from "$components/Navbar.svelte";
</script>

<Navbar />
<div class="mt-[84px]"></div>

<div class="container mx-auto text-on-surface dark:text-on-surface-dark">
  <div class="relative -z-1">
    <img src="/bg-1.jpg" alt="Creativity" width="100%" />
    <h1
      class="absolute top-[10%] left-[50%] translate-x-[-50%] text-2xl md:text-3xl lg:text-5xl text-white font-bold"
    >
      Make your <span class="text-primary dark:text-primary-dark">3D</span> Model
    </h1>
  </div>
  <div class="mt-10">
    <h2
      class="text-3xl text-primary dark:text-primary-dark text-center font-bold"
    >
      ABOUT US
    </h2>
    <p class="max-w-[720px] text-xl mx-auto px-4 pt-6 text-justify">
      At SKY Cad, we cover all aspects of 3D printing technology like “Latest
      News”, “3D Printers”, “Print On Demand Services” and “3D Design Store. Sky
      Cad has built a dedicated & strong support staff and they are equipped
      with all the required tools, training and resources to offer.We use high
      quality imported machines and plastic. These machines can create usable
      objects, not just working prototypes.
    </p>
    <hr class="my-12 bg-outline-variant dark:bg-outline-variant-dark" />
    <article class="max-w-[720px] text-xl mx-auto px-4 text-justify">
      <h2
        class="text-3xl text-primary dark:text-primary-dark text-center font-bold mb-6"
      >
        HOW 3D PRINTING WORKS?
      </h2>

      <img src="/diagram.jpeg" alt="a diagram of how 3D printing works" />

      <p class="my-6">
        3D printing, also known as additive manufacturing, works by creating
        three-dimensional objects layer by layer from a digital model. Here's a
        simplified breakdown of the process:
      </p>

      <ul class="space-y-4">
        <li>
          <span class="font-bold text-primary dark:text-primary-dark">
            Designing the Model:
          </span>
          The process starts with creating a digital 3D model using computer-aided
          design (CAD) software. This can be done by designing from scratch or by
          using pre-existing templates.
        </li>
        <li>
          <span class="font-bold text-primary dark:text-primary-dark">
            Slicing:
          </span>
          Once the 3D model is ready, special software called a slicer breaks it
          down into thin horizontal layers, essentially creating a blueprint for
          the printer to follow. This slicing process determines how the printer
          will build the object layer by layer.
        </li>
        <li>
          <span class="font-bold text-primary dark:text-primary-dark">
            Printing:
          </span>
          The sliced design is sent to the 3D printer. The printer then builds the
          object layer by layer.
        </li>
        <li>
          <span class="font-bold text-primary dark:text-primary-dark">
            Post-Processing:
          </span>
          After printing, some objects may require post-processing, such as removing
          support structures, sanding, or painting, depending on the printing method
          and the desired finish.
        </li>
        <li>
          <span class="font-bold text-primary dark:text-primary-dark">
            Finalizing:
          </span>
          Once any necessary post-processing is complete, the 3D-printed object is
          ready for use or further assembly.
        </li>
      </ul>
    </article>
    <hr class="my-12 bg-outline-variant dark:bg-outline-variant-dark" />
    <article class="max-w-[720px] text-xl mx-auto px-4">
      <h2
        class="text-3xl text-primary dark:text-primary-dark text-center font-bold"
      >
        WHY TO CHOOSE US?
      </h2>
      <p class="mt-6 text-justify">
        3D printing is a fastest growing industry and our goal is to deliver on
        such technological advancements through a premier customer experience.
        In addition to this, our timely delivery facility also assisted us in
        getting an edge over our competitors. The key factors for which we have
        received appreciation from our customers that is
        <span class="text-primary dark:text-primary-dark">
          Quality standard, Competitive price and Expert staff
        </span>
      </p>
    </article>
  </div>
</div>
